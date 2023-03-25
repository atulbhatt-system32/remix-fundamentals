# 01. Routing

## 📝 Notes

Got The Error Below When Running "npm run dev" and opening the browser to
localhost:4001 Including results for prisma/client%20 did%20 not%20
initialize%20 yet.%20Please%20 run%20 prisma%generate
%20and%20try%20to%20import%20it%20again.. Do you want results only for
prisma/client%20did%20not%20initialize%20yet.%20Please%20run%20"prisma%20generate"%20and%20try%20to%20import%20it%20again.?
@prisma/client did not initialize yet.

Solution:

1. npm run setup

This gave me the hint that I need to install the @prisma/engines.

2. npm install @prisma/engines

3. npm run setup

4. npm run dev

## 🤓 Background

Almost everything with a URL has routing requirements. Whether it's a web app,
or a series of API endpoints, routing is an important part. Remix has built-in
routing. There are three options for routing in a Remix app:

1. [File-system](https://remix.run/docs/en/v1/api/conventions#file-name-conventions)
   based routes (most common)
2. [`remix.config.js`](https://remix.run/docs/en/v1/api/conventions#routes)
   based routes (less common)
3. Runtime defined routes (primarily used for
   [migrations](https://remix.run/docs/en/v1/guides/migrating-react-router-app))

When you place a file in `app/routes` Remix creates a route for that file. You
can
[read about the filename convention here](https://remix.run/docs/en/v1/api/conventions#file-name-conventions).
The most important thing for you to know right now is that the file should have
a component as the `default` `export` which will be rendered for the part of the
UI the file represents:

```tsx filename=app/routes/example.tsx
export default function ExampleRoute() {
  return (
    <div>
      <h1>Example</h1>
      <p>I am a good example</p>
    </div>
  );
}
```

Every Remix app starts with a root route found in `app/root.tsx`. This will
render an `<Outlet />` component which determines where the direct children go.
If those child routes have child routes of their own then they will also render
an `<Outlet />`, but we'll get into that in more detail later.

To navigate between URLs on the web, we use `<a>` (anchor) tags with an `href`.
This triggers a full-page reload between the pages. This isn't the best
experience, so Remix supports client-side navigations by preventing this default
behavior and interacting directly with the browser's `history` API. To do this,
we'll be using the `<Link />` component and the `to` prop:

```tsx
<a href="/puppies">Full-page reload happiness</a>
<Link to="/puppies">Client-side navigation happiness</Link>
```

Those two elements will lead to the same place, but the `<Link />` will be a
better user experience.

📜 [Remix Routing Docs](https://remix.run/docs/en/v1/guides/routing).

📜
[Blog Tutorial: Your First Route](https://remix.run/docs/en/v1/tutorials/blog#your-first-route)

## 💪 Exercise

Our goal for this exercise is to add a link to a new route at `/posts` and to
create a file to be rendered when the user visits that route.

Here's a nice and styled link for you to use if you like:

```tsx
<div className="mx-auto mt-16 max-w-7xl text-center">
  <Link to="/posts" className="text-xl text-blue-600 underline">
    Blog Posts
  </Link>
</div>
```

And here's what you can use as the default export of the posts route:

```tsx
<main>
  <h1>Posts</h1>
</main>
```

## 🗃 Files

- `app/routes/index.tsx`
- `app/routes/posts/index.tsx` <-- you create this file

## 🦉 Elaboration and Feedback

After the instruction, if you want to remember what you've just learned, then
fill out the elaboration and feedback form:

https://ws.kcd.im/?ws=Remix%20Fundamentals&e=01.%20Routing&em=
