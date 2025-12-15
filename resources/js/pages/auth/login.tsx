import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({ status, canResetPassword, canRegister }: LoginProps) {
    return (
        <AuthLayout
            title="Welcome back"
            description="Log in to continue to your dashboard"
        >
            <Head title="Log in" />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            {/* Card */}
                            <div className="rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-slate-900/80">
                                <div className="grid gap-5">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="you@example.com"
                                            className="h-11"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password">Password</Label>
                                            {canResetPassword && (
                                                <TextLink
                                                    href={request()}
                                                    className="text-xs"
                                                    tabIndex={5}
                                                >
                                                    Forgot password?
                                                </TextLink>
                                            )}
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            placeholder="••••••••"
                                            className="h-11"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="remember" name="remember" tabIndex={3} />
                                            <Label htmlFor="remember" className="text-sm">
                                                Remember me
                                            </Label>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-2 h-11 w-full rounded-xl text-sm"
                                        tabIndex={4}
                                        disabled={processing}
                                        data-test="login-button"
                                    >
                                        {processing && <Spinner />}
                                        Log in
                                    </Button>
                                </div>
                            </div>

                            {canRegister && (
                                <div className="text-center text-sm text-muted-foreground">
                                    Don’t have an account?{' '}
                                    <TextLink href={register()} tabIndex={6}>
                                        Create one
                                    </TextLink>
                                </div>
                            )}
                        </>
                    )}
                </Form>

                {status && (
                    <div className="mt-4 text-center text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}
            </motion.div>
        </AuthLayout>
    );
}
