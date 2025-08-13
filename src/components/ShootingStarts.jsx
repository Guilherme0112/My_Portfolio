import { useEffect, useRef } from 'react';

function ShootingStars() {
    const canvasRef = useRef();
    let lastSpawn = 0;
    const delayBetweenStars = 4000; // 3 segundos entre estrelas
    let star = null;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                this.opacity = 1;
                this.length = random(150, 250);
                this.speed = random(4, 7);
                this.size = random(1, 2);

                // Quatro cantos possíveis
                const corners = [
                    { x: 0, y: 0 },                // top-left
                    { x: width, y: 0 },            // top-right
                    { x: 0, y: height },           // bottom-left
                    { x: width, y: height },       // bottom-right
                ];

                const corner = corners[Math.floor(Math.random() * 4)];
                this.x = corner.x;
                this.y = corner.y;

                switch (corner) {
                    case corners[0]: // top-left
                        this.angle = random(0, Math.PI / 2);
                        break;
                    case corners[1]: // top-right
                        this.angle = random(Math.PI / 2, Math.PI);
                        break;
                    case corners[2]: // bottom-left
                        this.angle = random((3 * Math.PI) / 2, 2 * Math.PI);
                        break;
                    case corners[3]: // bottom-right
                        this.angle = random(Math.PI, (3 * Math.PI) / 2);
                        break;
                }
            }


            update() {
                this.x += this.speed * Math.cos(this.angle);
                this.y += this.speed * Math.sin(this.angle);

                this.opacity -= 0.005;

                // Se saiu totalmente da tela + margem ou apagou, reseta
                if (
                    this.opacity <= 0 ||
                    this.x < -this.length ||
                    this.x > width + this.length ||
                    this.y < -this.length ||
                    this.y > height + this.length
                ) {
                    this.opacity = 0;
                }
            }

            draw() {
                const endX = this.x - this.length * Math.cos(this.angle);
                const endY = this.y - this.length * Math.sin(this.angle);

                const gradient = ctx.createLinearGradient(this.x, this.y, endX, endY);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity * 0.2})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.save();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = this.size;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.shadowColor = 'white';
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }


        let animationFrameId;

        function animate(time) {
            ctx.clearRect(0, 0, width, height);

            if (!star && (!lastSpawn || time - lastSpawn > delayBetweenStars)) {
                star = new Star();
                lastSpawn = time;
            }

            if (star) {
                star.update();
                star.draw();

                if (star.opacity <= 0) {
                    star = null;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 0,
                width: '100%',
                height: '100%',
            }}
        />
    );
}

export default ShootingStars;
