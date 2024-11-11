const Bookmark = ({ title, link }) => {

  return (
    <div class="bg-blue5 rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2 text-white">
      <a class="font-black text-2xl text-center text-off-white1 m-0 h-full w-full block before:block before:absolute left-0 border-solid border-teal-600 relative mb-2 flex items-center justify-center"
        href={ link }>
        { title }
      </a>
    </div>
  );
}

export default Bookmark;
