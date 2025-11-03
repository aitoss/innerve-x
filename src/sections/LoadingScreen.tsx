export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="text-center">
                <div className="loader mb-4"></div>
                <p className="text-lg font-medium text-gray-700">Loading...</p>
            </div>
            <style jsx>{`
                .loader {
                    border: 8px solid #f3f3f3;
                    border-top: 8px solid #3498db;
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    animation: spin 2s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}