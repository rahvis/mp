import { useRef, FC, useEffect, useState } from 'react';

import { CanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import Wave from './Wave';

const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width } = useResponsiveSize();
  const [context, setContext] = useState<CanvasRenderingContext2D | undefined>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      // Set the color here
      ctx.fillStyle = 'blue'; // Set the fill color to red
      // ctx.strokeStyle = 'blue'; // Set the stroke color to blue
      setContext(ctx);
    }
  }, []);

  return (
    <>
      <CanvasContext.Provider value={{ context }}>
        <canvas id="canvas" ref={canvasRef} width={width} height={220}></canvas>
        <Wave />
      </CanvasContext.Provider>
    </>
  );
};

export default Canvas;
