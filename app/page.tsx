import Tres3ceLogo from "./components/logo";

export default function Page() {
  return (
    <section>
      <Tres3ceLogo />
      <h1 className="mt-16 text-4xl text-left leading-none select-none tracking-tightest font-mont" aria-label="Crea, Comunica, Comparte valor.">
        <span data-content="crea," className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-left before:text-[#404040] before:animate-gradient-background-1">
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1"> crea,</span>
        </span>
        <span data-content="comunica," className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-left before:text-[#404040] before:animate-gradient-background-2">
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2"> comunica,</span>
        </span>
        <span data-content="comparte valor." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-left before:text-[#404040] before:animate-gradient-background-3">
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3"> comparte valor.</span>
        </span>
      </h1>
    </section>
  );
}
