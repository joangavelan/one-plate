export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto grid h-auto max-w-[35rem] grid-rows-[auto_minmax(0,_1fr)_auto] flex-col px-4 py-4 md:h-screen md:max-w-[90rem] md:py-7'>
      {children}
    </div>
  )
}
