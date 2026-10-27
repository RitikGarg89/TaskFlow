const API_BASE_URL =
    import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const TOKEN_KEY = "taskflow_token";

export const getToken = () => {
    try {
        return sessionStorage.getItem(TOKEN_KEY);
    } catch {
        return null;
    }
};

export const setToken = (token) => {
    try {
        if (token) {
            sessionStorage.setItem(TOKEN_KEY, token);
        } else {
            sessionStorage.removeItem(TOKEN_KEY);
        }
    } catch {
        // Fallback for restricted storage environments
    }
};

export const clearToken = () => {
    try {
        sessionStorage.removeItem(TOKEN_KEY);
    } catch {
        // Fallback
    }
};

async function apiFetch(endpoint, options = {}) {
    const url = endpoint.startsWith("http")
        ? endpoint
        : `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    const token = getToken();
    if (token && !headers.Authorization) {
        headers.Authorization = `Bearer ${token}`;
    }

    const config = {
        ...options,
        headers,
        credentials: "include", // Send & receive HTTP-only cookies
    };

    if (config.body && typeof config.body === "object") {
        config.body = JSON.stringify(config.body);
    }

    const response = await fetch(url, config);

    let data;
    try {
        data = await response.json();
    } catch {
        data = { message: response.statusText };
    }

    if (!response.ok) {
        const error = new Error(
            data.message || `Request failed with status ${response.status}`
        );
        error.status = response.status;
        error.data = data;
        throw error;
    }

    return data;
}

export const api = {
    get: (url, options) => apiFetch(url, { ...options, method: "GET" }),
    post: (url, data, options) =>
        apiFetch(url, { ...options, method: "POST", body: data }),
    patch: (url, data, options) =>
        apiFetch(url, { ...options, method: "PATCH", body: data }),
    put: (url, data, options) =>
        apiFetch(url, { ...options, method: "PUT", body: data }),
    delete: (url, options) => apiFetch(url, { ...options, method: "DELETE" }),
};

export default api;
