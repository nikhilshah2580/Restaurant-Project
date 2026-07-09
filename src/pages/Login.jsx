import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import {
  FaArrowLeft,
  FaEnvelope,
  FaGoogle,
  FaLock,
  FaSignInAlt,
  FaUser,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, login, loginWithGoogle, register } = useAuth();
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const redirectTo = location.state?.from || "/";

  if (isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  const handleChange = (event) => {
    setError("");
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const authData = {
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password,
    };
    const result =
      mode === "register" ? register(authData) : login(authData);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    navigate(redirectTo, { replace: true });
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setError("");
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  const handleGoogleLogin = () => {
    const result = loginWithGoogle();

    if (result.ok) {
      navigate(redirectTo, { replace: true });
    }
  };

  const isRegister = mode === "register";

  return (
    <main className="min-h-screen bg-[#F8FCFB]">
      <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(15,127,108,0.12),transparent_34%),linear-gradient(180deg,#F8FCFB_0%,#ffffff_100%)]">
        <div className="mx-auto min-h-screen max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-bold text-slate-600 shadow-sm transition hover:border-[#0F7F6C] hover:text-[#0F7F6C] sm:px-5"
          >
            <FaArrowLeft />
            Back
          </button>

          <div className="grid min-h-[calc(100vh-64px)] items-center gap-8 py-8 lg:grid-cols-[1fr_460px] lg:gap-14">
            <div className="text-center lg:text-left">
              <p className="font-serif text-4xl italic text-[#0F7F6C] sm:text-5xl">
                {isRegister ? "Join Momos" : "Welcome Back"}
              </p>
              <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight text-[#111827] sm:text-5xl lg:mx-0">
                {isRegister
                  ? "Create your account for faster checkout"
                  : "Sign in before your next momo order"}
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500 lg:mx-0">
                Use your email and password to access your account, checkout
                faster, and keep your momo cravings one tap away.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-100 bg-white/95 p-5 shadow-2xl shadow-slate-200/80 backdrop-blur sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-[#0F7F6C]">
                    {isRegister ? "Register" : "Login"}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-[#111827]">
                    Your Account
                  </h2>
                </div>
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#F26419]/10 text-2xl text-[#F26419] sm:h-14 sm:w-14">
                  <FaSignInAlt />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 rounded-full bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => switchMode("login")}
                  className={`rounded-full px-4 py-3 text-sm font-bold transition ${
                    !isRegister
                      ? "bg-white text-[#0F7F6C] shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => switchMode("register")}
                  className={`rounded-full px-4 py-3 text-sm font-bold transition ${
                    isRegister
                      ? "bg-white text-[#0F7F6C] shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  Register
                </button>
              </div>

              {isRegister && (
                <label className="mt-6 block">
                  <span className="text-sm font-bold text-slate-600">Name</span>
                  <span className="mt-2 flex h-13 items-center gap-3 rounded-lg border border-slate-200 px-4 transition focus-within:border-[#0F7F6C] focus-within:ring-4 focus-within:ring-[#0F7F6C]/10 sm:h-14">
                    <FaUser className="shrink-0 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-transparent text-slate-700 outline-none"
                      required={isRegister}
                    />
                  </span>
                </label>
              )}

              <label className={isRegister ? "mt-5 block" : "mt-6 block"}>
                <span className="text-sm font-bold text-slate-600">Email</span>
                <span className="mt-2 flex h-13 items-center gap-3 rounded-lg border border-slate-200 px-4 transition focus-within:border-[#0F7F6C] focus-within:ring-4 focus-within:ring-[#0F7F6C]/10 sm:h-14">
                  <FaEnvelope className="shrink-0 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-slate-700 outline-none"
                    required
                  />
                </span>
              </label>

              <label className="mt-5 block">
                <span className="text-sm font-bold text-slate-600">
                  Password
                </span>
                <span className="mt-2 flex h-13 items-center gap-3 rounded-lg border border-slate-200 px-4 transition focus-within:border-[#0F7F6C] focus-within:ring-4 focus-within:ring-[#0F7F6C]/10 sm:h-14">
                  <FaLock className="shrink-0 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full bg-transparent text-slate-700 outline-none"
                    required
                    minLength={4}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-[#0F7F6C]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </span>
              </label>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                <label className="inline-flex cursor-pointer items-center gap-2 font-semibold text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 accent-[#0F7F6C]"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="font-bold text-[#F26419] transition hover:text-orange-700"
                >
                  Forgot Password?
                </button>
              </div>

              {error && (
                <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-[#0F7F6C] px-6 py-4 font-bold text-white shadow-lg shadow-[#0F7F6C]/20 transition hover:bg-[#0d6c56]"
              >
                {isRegister ? "Create Account" : "Login"}
              </button>

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition hover:border-[#F26419] hover:text-[#F26419]"
              >
                <FaGoogle />
                Continue with Google
              </button>

              <p className="mt-5 text-center text-sm text-slate-500">
                {isRegister
                  ? "Already have an account? Switch to login."
                  : "New here? Register with your email first."}
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
