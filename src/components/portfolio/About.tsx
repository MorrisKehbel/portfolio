export const About = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className=" rounded-2xl border border-black/10 p-4">
        <div className="h-full text-xl rounded-xl border border-black/10 p-4">
          <p className="mb-3">
            I’m <strong>Morris Kehbel</strong>, a web developer specializing in
            scalable, modern apps. I blend clean code, performance, and
            thoughtful design to build user-first products.
          </p>
          <p>
            Currently focused on the{" "}
            <span className="font-medium">Next.js App Router</span>, server
            actions, and accessible UI systems.
          </p>
        </div>
        <div className="my-3 space-y-2">
          <div className="h-3 w-2/3 rounded bg-black/10" />
          <div className="h-3 w-1/2 rounded bg-black/10" />
        </div>
      </div>
    </div>
  );
};
