function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy;
        <a
          href="https://github.com/Regina158"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Developed By
        </a>
        <a
          href="https://github.com/Regina158"
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Regina &thinsp;
        </a>
        {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default AppFooterCopyright;
