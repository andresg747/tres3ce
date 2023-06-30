import type { Metadata } from 'next';
import Link from 'next/link';
import InstagramIcon from 'app/components/icons/ig';
import EmailIcon from 'app/components/icons/email';

export const metadata: Metadata = {
  title: 'Contacto',
  //   description: 'Read my thoughts on software development, design, and more.',
};

export default async function ContactPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Contacto</h1>

      <a href="http://instagram.com/tres3ce" target="_blank" rel="noopener noreferrer">
        <p className="mb-4">
          <InstagramIcon /><span className="ml-2 inline text-[#f5f5f5]">@tres3ce</span>
        </p>
      </a>
      <a href="mailto:info@tres3ce.com" target="_blank" rel="noopener noreferrer">
        <p className="mb-16">
          <EmailIcon /><span className="ml-2 inline text-[#f5f5f5]">info@tres3ce.com</span>
        </p>
      </a>

      <form
        style={{ opacity: 0.7 }}
        className="relative max-w-[500px] text-sm"
      >
        <textarea
          aria-label="Deja tu mensaje"
          placeholder="o déjanos tu mensaje..."
          name="entry"
          style={{ resize: 'none' }}
          rows={3}
          required
          className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        />
        <button
          className="flex items-center justify-center absolute right-2 top-2 px-2 py-1 font-medium h-7 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
