<script setup lang="ts">
import { ref, onMounted } from 'vue'
// defineProps<{ msg: string }>();
interface branch {
  length: number,
  angle: number,
  point: point;
  width: number;
  [key: string]: any
}
interface point {
  x: number;
  y: number;
}
const bg: any = ref(null)
function step(ctx: CanvasRenderingContext2D, branchs: branch, deep: number) {
  const endPoint = getEndPonit(branchs)
  if (branchs.point.x >= 800 || branchs.point.y >= 580) return;
  drawline(ctx, branchs.point, endPoint, branchs.width)
  if (deep > 10 && Math.random() < 0.2) {
    flower(ctx, branchs.point, endPoint)
  }
  if (deep < 3 || Math.random() < 0.5) {
    const width = branchs.width - Math.round(Math.random() * 10) / 100 - 0.1
    pendingTask.push(() => step(ctx, {
      width: width <= 0.5 ? 0.5 : width,
      point: endPoint,
      length: branchs.length + (Math.random() * 2 - 1),
      angle: branchs.angle - Math.random() * 0.2
    }, deep + 1))
  }
  if (deep < 3 || Math.random() < 0.5) {
    const width = branchs.width - Math.round(Math.random() * 10) / 100 - 0.1
    pendingTask.push(() => {
      step(ctx, {
        width: width <= 0.5 ? 0.5 : width,
        point: endPoint,
        length: branchs.length + (Math.random() * 2 - 1),
        angle: branchs.angle + Math.random() * 0.25
      }, deep + 1)
    })
  }
}
function drawline(ctx: CanvasRenderingContext2D, start: point, end: point, width: number) {
  ctx.beginPath();
  ctx.lineWidth = width
  ctx.strokeStyle = "#1B2B2A"
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.closePath();
  ctx.stroke();
}
function flower(ctx: CanvasRenderingContext2D, start: point, end: point) {
  const x = start.x + (Math.random() * (end.x - start.x)) / 2;
  const k = start.y / start.x
  const b = start.y - (k * start.x)
  const y = k * x + b
  ctx.beginPath();
  ctx.strokeStyle = "red"
  ctx.lineWidth = 1
  const r = Math.random() * 2 + 1
  let grad = ctx.createRadialGradient(x, y, r, x, y, 1); //创建一个渐变色线性对象
  grad.addColorStop(1, "#E53D41");
  grad.addColorStop(0.5, "#E53D41");
  grad.addColorStop(0, "#E53D41");
  ctx.fillStyle = grad
  ctx.moveTo(x, y);
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fill();
  ctx.stroke();
}
function getEndPonit(branch: branch) {
  const { point, length, angle } = branch
  return {
    x: point.x + (Math.cos(angle) * length),
    y: point.y + (Math.sin(angle) * length)
  }
}
const pendingTask: Function[] = []

function aFrame() {
  const queue = [...pendingTask]
  pendingTask.length = 0
  queue.forEach((fn) => fn())
  if (queue.length === 0) {
    status = false
  }
}
let status = true;
let count = 0
function startAnimation() {
  console.log('111')
  requestAnimationFrame(() => {
    count++
    if (count % 3 === 0) aFrame()
    if (status) startAnimation()
  })

}
startAnimation()



onMounted(() => {
  console.log(bg, 'bg')
  const canvas: HTMLCanvasElement = bg.value as HTMLCanvasElement;
  console.log(canvas, 'canvas')
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const sourceX = 0;
    const sourceY = 0;
    ctx.strokeStyle = "#1B2B2A"
    ctx.lineJoin = 'round' // 线段的连接方式
    ctx.fillStyle = 'red'
    ctx.lineWidth = 3
    const root: branch = {
      length: 30,
      angle: Math.PI / 5,
      width: 3,
      point: {
        x: sourceX,
        y: sourceY,
      }
    }

    step(ctx, root, 1)
    // let leftX = sourceX - (Math.tan(Math.PI / 6) * 20)
    // let leftY = sourceY - 20
    // let rigthX = sourceX + (Math.tan(Math.PI / 6) * 20)
    // let rigthY = sourceY - 20
    // drawBranch(ctx, sourceX, sourceY - 20, leftX, leftY - 20, 2)
    // drawBranch(ctx, sourceX, sourceY - 20, rigthX, rigthY - 20, 2)
    // leftX = leftX - (Math.tan(Math.PI / 6) * 20)
    // leftY = sourceY - 20
    // rigthX = sourceX + (Math.tan(Math.PI / 6) * 20)
    // rigthY = sourceY - 20

    // ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect(10, 10, 55, 50);
    // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    // ctx.fillRect(30, 30, 55, 50);
    // ctx.clearRect(20, 20, 20, 20);
    // ctx.strokeRect(100, 100, 40, 40);

    // ctx.beginPath()
    // ctx.moveTo(150, 25)
    // ctx.lineTo(150, 125)
    // ctx.lineTo(200, 75)
    // ctx.fillStyle = "#999"
    // ctx.fill()

    // ctx.beginPath()
    // ctx.arc(280, 75, 20, 0, 2 * Math.PI)
    // ctx.stroke();
    // ctx.closePath();

    // ctx.beginPath()
    // ctx.arc(250, 75, 50, 0.5 * Math.PI, 1.5 * Math.PI)
    // ctx.moveTo(250, 125);
    // ctx.moveTo(270, 130);
    // ctx.stroke();
    // ctx.closePath();
    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口 (顺时针)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
    // ctx.stroke();

  }

})
</script>

<template>
  <div>
    <canvas ref="bg" width="1000" height="600"> 你的浏览器不支持canvas! </canvas>
  </div>
</template>

<style lang="scss" scoped>
// .aaaa {
//     border-color: red;
// }
</style>
