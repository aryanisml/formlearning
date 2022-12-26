import { useEffect, useRef } from 'react';
export  const  Patnagon = ()=>{
    const canvasRef = useRef(null);

    // useEffect(() => {
    //     if(canvasRef && canvasRef.current){
    //         const d:any = canvasRef.current;
    //         const ctx = d.getContext('2d');
    //         ctx.beginPath();
    //         ctx.moveTo(100,100);
    //         ctx.lineTo(100, 300);

    //         ctx.lineTo(300, 300);
    //         // ctx.lineTo(0, 1);
    //         // ctx.lineTo(1, 2);
    //         // ctx.lineTo(0, 0);
    //         ctx.closePath();
    //         ctx.stroke();
    //     }
     
      
    
    //   }, []);

    useEffect(() => {

        if(canvasRef && canvasRef.current){
            const d:any = canvasRef.current;
        const ctx = d.getContext('2d');
      
        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(150, 100);
        ctx.lineTo(50, 100);
        ctx.lineTo(0, 200);
        ctx.closePath();
        ctx.stroke();
        }
      }, []);
      
      

  return   <canvas ref={canvasRef} width={300} height={300} />
    
}