function SkillItem({ title = "", children }) {
  return (
    <div className='flex flex-col justify-center items-center cursor-pointer bg-secondary-color hover:bg-accent-color duration-75 rounded px-1 py-2'>
      {children}
      <span className='skill-title text-white tracking-wider'>{title}</span>
    </div>
  );
}

export default SkillItem;
