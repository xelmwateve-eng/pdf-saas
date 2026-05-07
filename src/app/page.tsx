'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">PDFAuto</div>
        <a href="#beta" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Rejoindre la beta
        </a>
      </nav>

      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Arrêtez de faire vos<br />
          <span className="text-blue-600">factures à la main</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Générez des factures PDF professionnelles depuis Shopify 
          en 10 secondes. Pas en 10 minutes.
        </p>

        <div id="beta" className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-lg font-bold mb-2">Beta gratuite limitée</h3>
          <p className="text-gray-600 mb-4 text-sm">
            20 places disponibles. Accès gratuit à vie au plan Pro.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'success' ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg">
                Inscription confirmée ! On vous contacte sous 24h.
              </div>
            ) : (
              <>
                <input 
                  type="email" 
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50"
                >
                  {status === 'loading' ? 'Inscription...' : 'Réserver ma place'}
                </button>
              </>
            )}
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            Déjà 12 entrepreneurs inscrits. Sans engagement.
          </p>
        </div>
      </section>
    </main>
  )
      }
