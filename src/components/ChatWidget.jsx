import { useState } from "react";
import { FaUserTie } from "react-icons/fa";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition cursor-pointer"
      >
        <FaUserTie size={24} />
      </button>

      {/* Chat embebido */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-[500px] bg-white border rounded-xl shadow-lg overflow-hidden z-50">
          <iframe
            src="https://n8n-agente-logistica.agencia1711.lat/webhook/c27ec77a-dd1d-4384-af7c-d79d8e98b54c/chat"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      )}
    </div>
  );
}
