import { useRef, FC, useEffect } from 'react';


const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      // Set the color here
      ctx.fillStyle = 'blue'; // Set the fill color to red
      // ctx.strokeStyle = 'blue'; // Set the stroke color to blue
    }
  }, []);

  return (
    <>

    </>
  );
};

export default Canvas;
