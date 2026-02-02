# Node2Know — Basic Express Server

The smallest possible Express app: **create an app** and **start listening**.

This repo is intentionally minimal so the first Express ideas land cleanly:

- Express gives you an `app` object (your server control panel)
- you choose a `PORT`
- you start the server with `app.listen(...)`

No routes yet. No middleware yet. Just ignition. 🔥

---

## ✅ Prereqs

- **Node.js** installed
- **npm** (ships with Node)

Check:

```bash
node -v
npm -v
```

---

## 📦 Install

```bash
npm install
```

---

## ▶️ Run

```bash
npm start
```

You should see output similar to:

```txt
Created process at PID: 12345
Listening on port: 3000
Try: http://localhost:3000
```

---

## 👀 Run with watch mode

```bash
npm run watch
```

Now edit `app.js`, save, and watch Node restart the process.

Stop with:

- `Ctrl + C`

---

## 🧠 What this is teaching

### Express app instance

```js
const app = express();
```

This is where you’ll later attach:

- routes (`app.get(...)`)
- middleware (`app.use(...)`)
- configuration

### Port selection

```js
const PORT = process.env.PORT || 3000;
```

- local dev: uses `3000`
- hosted environments often set `PORT` for you

### Start listening

```js
app.listen(PORT, () => { ... });
```

The callback runs **once**, when the server is ready.

---

## 📁 Project Structure

```txt
.
├── app.js
├── package.json
└── README.md
```

---

## Repo

- https://github.com/ProfessorSolo/Node2Know-BasicExpressServer.git

---

## License

**Node2Know-Learn-1.0** (see `LICENSE`).
