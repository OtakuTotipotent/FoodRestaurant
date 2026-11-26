const NotFound = () => {
  return (
    <div className="max-w-64 mx-auto bg-red-400 dark:bg-red-500/50 p-6 rounded-xl mt-10 md:mt-40 shadow-lg grid gap-4 text-white dark:text-gray-300">
      <span className="font-bold text-5xl tracking-wider">404</span>
      <p className="font-semibold text-xl">Page Not Found!</p>
    </div>
  );
};

export default NotFound;
