function Subtitle({styleClass, children, title}){
  return(
      <div >
        <p className={`text-center text-xl font-semibold ${styleClass}`}>{title}</p>
        {children}
        </div>
  )
}

export default Subtitle