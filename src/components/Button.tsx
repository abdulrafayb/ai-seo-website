export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className='relative bg-gradient-to-b from-[#190D2E] to-[#4A208A] py-2 px-3 text-sm font-medium shadow-[0px_0px_12px_#8C45FF] rounded-lg'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 border border-white/20 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
        <div className='absolute inset-0 border border-white/40 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]'></div>
        <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};
