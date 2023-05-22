function ProjectItem({title, description = "", githubLink = "", webLink = ""}) {
  return (
    <div className='flex flex-col p-4 gap-y-3 bg-secondary-color rounded'>
      <div className='flex flex-row justify-between items-center'>
        <h2 className='prose-lg text-white font-bold line-clamp-1'>{title}</h2>
        <div className='flex flex-row justify-content-end items-center gap-x-3'>
          <span className='border-[1.5px] rounded-sm border-accent-color text-accent-color px-2 hover:bg-accent-color hover:text-white duration-75 project-font'>
            <a rel="noreferrer" target='_blank' href={githubLink ? githubLink : '#'}>
              Github
            </a>
          </span>
          <span className='border-[1.5px] rounded-sm border-accent-color text-accent-color px-2 hover:bg-accent-color hover:text-white duration-75 project-font'>
            <a rel="noreferrer" target='_blank' href={webLink ? webLink : '#'}>
              Demo
            </a>
          </span>
        </div>
      </div>
      <div className='flex flex-row gap-x-3'>
        <span className='bg-dark-accent-color rounded text-accent-color px-2 font-bold project-font cursor-pointer'>
          HTML5
        </span>
        <span className='bg-dark-accent-color rounded text-accent-color px-2 font-bold project-font cursor-pointer'>
          CSS3
        </span>
        <span className='bg-dark-accent-color rounded text-accent-color px-2 font-bold project-font cursor-pointer'>
          Javascript
        </span>
      </div>
      <p className="prose-sm line-clamp-4 text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus deleniti eum illum at quaerat sed laudantium velit, ducimus voluptate amet odio. Consectetur voluptatibus delectus iste molestias libero ad facilis eius.
      </p>
    </div>
  );
}

export default ProjectItem;