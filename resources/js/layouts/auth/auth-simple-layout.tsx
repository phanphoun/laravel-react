import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-6">
            {/* Background blobs */}
            <div className="absolute top-24 left-24 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />
            <div className="absolute bottom-24 right-24 h-96 w-96 rounded-full bg-slate-400/20 blur-3xl" />

            <div className="w-full max-w-md z-10">
                <div className="flex flex-col items-center mb-8">
                    <Link href={home()} className="flex items-center gap-2 text-2xl font-extrabold tracking-tight mb-2">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-green-500 to-emerald-400 text-white shadow-md">
                            🛒
                        </span>
                        <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                            Shop<span className="font-black">&</span>Buy
                        </span>
                    </Link>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-6">
                        {title}
                    </h1>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        {description}
                    </p>
                </div>

                <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700 shadow-xl p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
