import React from 'react'

interface IChildren {
    children?: React.ReactNode
}

const Container = (props: IChildren) => {
    const { children } = props
  return (
    <div className="flex justify-center font-Kanit">
      <div className=" w-full" >
        {children}
      </div>
    </div>
  )
}

export default Container