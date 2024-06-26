var slide_result = require('./slide.js');
var click_result = require('./click.js');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  	res.send('Hello World!')
})

// app.use(express.json())
// app.post('/click', (req, res) => {
// 	const positions = req.body.positions;
//   	const gt = req.body.gt;
//   	const challenge = req.body.challenge;
//   	const c = req.body.c;
//   	const s = req.body.s;
//   	const rt = req.body.rt;
//   	const dist = click_result(positions, gt, challenge, c, s, rt)
//   	res.send(dist);
// }
// )

app.get('/click', (req, res) => {
	const positions = req.query.positions;
  	const gt = req.query.gt;
  	const challenge = req.query.challenge;
  	const c = req.query.c;
  	const s = req.query.s;
  	const rt = req.query.rt;
  	const dist = click_result(positions, gt, challenge, c, s, rt)
  	res.send(dist);
}
)

app.post('/slide', (req, res) => {
	const dis = req.body.dis;
	const gt = req.body.gt;
  	const challenge = req.body.challenge;
  	const c = req.body.c;
  	const s = req.body.s;
  	const rt = req.body.rt;
  	const dist = slide_result(dis, gt, challenge, c, s, rt)
  	res.send(dist);
}
)

app.listen(port, () => {
  	console.log(`Dingzhenma Server listening on port ${port}`)
})