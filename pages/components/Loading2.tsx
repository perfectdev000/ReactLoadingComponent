const Loading2 = () => {

  const styles  = {
    loading:{
      display:'flex',      
      width:'500px',
      // height:'100px',
      position:'relative',
      alignItemm:'center'
    },
    p: {
      padding:'0',
      margin:'0 auto',
      resize:'none',
      overflow: 'hidden',
      fontFamily:'tahoma, serif',
      backgroundColor: 'transparent',
      border:'0',
      fontWeight:'700',
      color:'#06C',
      fontSize:'50px',
      textAlign:'center',
      textShadow: '-2px -2px 1px #222, -1px -1px 1px #222, 1px 1px 1px #444, 2px 2px 0 #444, 3px 3px 0 #444, 4px 4px 0 #444, 5px 5px 0 #444'
    },
    loadingMask:{
      display:'block',
      position:'absolute',
      top:0, 
      width:'100px',
      height:'100%',
      backgroundColor:'#222',
      webkitTransform: 'skew(-20deg)',
      mozTransform: 'skew(-20deg)',
      oTransform: 'skew(-20deg)',
      msTransform: 'skew(-20deg)',
      margin:'0 0 0 0px',
      transform:'skew(-20deg)',

      webkitAnimation: 'maskMove 1s ease-out 0s infinite',
      mozAnimation:  'maskMove 1s ease-out 0s infinite',
      oAnimation: 'maskMove 1s ease-out 0s infinite',
      msAnimation:  'maskMove 1s ease-out 0s infinite',
      animation:  'maskMove 1s ease-out 0s infinite',
    },
  } as const;

  return (
    <>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100%'}}>
        <span id="loading" style = {styles.loading}>
          <p style = {styles.p}>Loading ...</p>
          <span id="loadingMask" style = {styles.loadingMask}></span>
        </span>
      </div>
    </>
  )
}

export default Loading2