export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto grid h-auto max-w-[35rem] grid-rows-[auto_minmax(0,_1fr)_auto] flex-col gap-5 px-4 py-4 sm:max-w-[50rem] md:py-7 lg:h-screen lg:max-w-[90rem]'>
      {children}
    </div>
  )
}
