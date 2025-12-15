import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-4xl rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-xl p-8"
                >
                    {/* Header */}
                    <header className="flex items-center justify-between mb-10">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                            🚀 My Laravel App
                        </h1>
                        <nav className="flex items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="rounded-lg px-4 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
                                    >
                                        Log in
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </>
                            )}
                        </nav>
                    </header>

                    {/* Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white mb-4">
                                Build faster with
                                <span className="block text-slate-600 dark:text-slate-400">Laravel & Inertia</span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                A clean starting point for modern full-stack apps using Laravel, React, and Tailwind CSS.
                            </p>

                            {!auth.user && (
                                <div className="flex gap-4">
                                    <Link
                                        href={login()}
                                        className="rounded-xl bg-slate-900 text-white px-6 py-3 text-sm font-medium transition hover:opacity-90 dark:bg-white dark:text-slate-900"
                                    >
                                        Get Started
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="rounded-xl border px-6 py-3 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
                                        >
                                            Create Account
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Illustration Placeholder */}
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-5xl">
                                ⚡
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="mt-12 text-center text-xs text-slate-500 dark:text-slate-500">
                        © {new Date().getFullYear()} Built with Laravel, React & Tailwind
                    </footer>
                </motion.div>
            </div>
        </>
    );
}
