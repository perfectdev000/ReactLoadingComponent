const Loading1 = () => {

  const styles  = {
    loading:{
      display:'block',
      width:'100px',
      height:'100px'
    },
    outerCircle: {
      display:'block',
      position:'absolute',
      margin:'0 auto',
      width:'100px',
      height:'100px',
      borderTop:'7px solid #06F',
      borderBottom:'7px solid #06F',
      borderLeft:'7px solid transparent',
      borderRight:'7px solid transparent',
      borderRadius:'100px',
      mozBorderRadius:'100px',
      webkitBorderRadius:'100px',
      msBorderRadius:'100px',
      oBorderRadius:'100px',
      boxShadow:'0 0 20px #06F',
      mozBoxShadow:'0 0 20px #06F',
      msBoxShadow:'0 0 20px #06F',
      oBoxShadow:'0 0 20px #06F',
      webkitBoxShadow:'0 0 20px #06F',      
      webkitAnimation: `cwSpin 1s linear .2s infinite`,
      mozAnimation: `cwSpin .666s linear .2s infinite`,
      oAnimation: `cwSpin .666s linear .2s infinite`,
      msAnimation: `cwSpin .666s linear .2s infinite`,
      animation: `cwSpin .666s linear .2s infinite`,
    },
    innerCircle: {
      display:'block',
      position:'absolute',
      margin:'25px 0 0 25px',
      width:'50px',
      height:'50px',
      borderTop:'7px solid #06F',
      borderBottom:'7px solid #06F',
      borderLeft:'7px solid transparent',
      borderRight:'7px solid transparent',
      borderRadius:'50px',
      mozBorderRadius:'50px',
      webkitBorderRadius:'50px',
      msBorderRadius:'50px',
      oBorderRadius:'50px',
      boxShadow:'0 0 20px #06F',
      mozBoxShadow:'0 0 20px #06F',
      msBoxShadow:'0 0 20px #06F',
      oBoxShadow:'0 0 20px #06F',
      webkitBoxShadow:'0 0 20px #06F',      
      webkitAnimation: `ccwSpin 1s linear .2s infinite`,
      mozAnimation: `ccwSpin .666s linear .2s infinite`,
      oAnimation: `ccwSpin .666s linear .2s infinite`,
      msAnimation: `ccwSpin .666s linear .2s infinite`,
      animation: `ccwSpin .666s linear .2s infinite`,
    },
    center:{
      display:'block',
      margin:'5px 0 0 5px',
      width:'26px',
      height:'26px',
      backgroundColor:'#06F',
      borderRadius:'26px',
      mozBorderRadius:'26px',
      webkitBorderRadius:'26px',
      msBorderRadius:'26px',
      oBorderRadius:'26px',
    },
  } as const;

  return (
    <>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100%'}}>
        <span id="loading" style = {styles.loading}>
          <span id="outerCircle" style = {styles.outerCircle}></span>
          <span id="innerCircle" style = {styles.innerCircle}>
            <span id="center" style = {styles.center}></span>
          </span>
        </span>
      </div>
    </>
  )
}

export default Loading1