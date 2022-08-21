export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto flex min-h-screen max-w-[35rem] flex-col px-4 py-7 md:max-w-[90rem]'>
      {children}
    </div>
  )
}
