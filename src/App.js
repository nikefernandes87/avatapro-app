import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [screen, setScreen] = useState("landing");
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800 flex flex-col items-center px-6 py-10">
      {screen === "landing" && (
        <>
          <header className="w-full flex justify-between items-center max-w-6xl mb-10">
            <div className="text-2xl font-bold text-blue-700">AvataPro</div>
            <div className="flex gap-4">
              <button onClick={() => setScreen("signup")} className="bg-white text-blue-600 border border-blue-500 px-4 py-2 rounded-xl hover:bg-blue-50">Teste Grátis</button>
              <button onClick={() => setScreen("signup")} className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">Criar Conta</button>
            </div>
          </header>
          <section className="text-center max-w-2xl">
            <h1 className="text-4xl font-extrabold mb-4 leading-snug">Seu avatar. Seu conteúdo. Seu estilo.</h1>
            <p className="text-lg text-gray-600 mb-6">Crie conteúdos personalizados com avatares únicos em poucos cliques.</p>
            <button onClick={() => setScreen("signup")} className="bg-purple-600 text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition">Experimente criar seu avatar agora</button>
            <div className="mt-10">
              <div className="w-full h-64 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-500">Avatar animado ou vídeo demo aqui</div>
            </div>
          </section>
          <section className="mt-16 w-full max-w-5xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">Depoimentos de Usuários</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3].map((id) => (
                <div key={id} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
                  <div className="font-semibold mb-2">Usuário {id}</div>
                  <p className="text-sm text-gray-600 mb-2">“Com o AvataPro consegui criar vídeos incríveis em minutos!”</p>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {screen === "signup" && (
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Crie sua Conta</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Nome" className="border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Email" className="border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="password" placeholder="Senha" className="border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">Criar Conta</button>
            <div className="text-center text-gray-500 text-sm">ou</div>
            <button className="bg-red-500 text-white py-2 rounded-xl hover:bg-red-600">Entrar com Google</button>
            <button className="bg-blue-800 text-white py-2 rounded-xl hover:bg-blue-900">Entrar com Facebook</button>
            <button type="button" onClick={() => setScreen("landing")} className="text-sm text-blue-600 mt-4 hover:underline">Voltar para início</button>
          </form>
        </div>
      )}
    </div>
  );
}
