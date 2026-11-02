import Visitor from './Visitor';
import TaskBoard from './TaskBoard';
import { useSelector } from 'react-redux';

function Home() {
    const { isAuthenticated, isInitialized } = useSelector((state) => state.auth);

    if (!isInitialized) {
        return (
            <div className="flex min-h-[calc(100vh-10rem)] w-full items-center justify-center p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white shadow-lg shadow-blue-600/25">
                        ✓
                    </div>
                    <div className="text-sm font-medium text-slate-500">
                        Loading TaskFlow...
                    </div>
                </div>
            </div>
        );
    }

    return isAuthenticated ? <TaskBoard /> : <Visitor />;
}

export default Home;
