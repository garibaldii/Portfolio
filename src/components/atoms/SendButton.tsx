"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CheckIcon } from "lucide-react";

export default function SendButton() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [errorName, setErrorName] = useState("");
    const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
    const [errorEmail, setErrorEmail] = useState("");

    // Validação de e-mail
    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Formatação de telefone (mantendo apenas números e formatando corretamente)
    const formatPhone = (value: string) => {
        let cleaned = value.replace(/\D/g, "");
        if (cleaned.length > 2 && cleaned.length <= 7) {
            cleaned = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
        } else if (cleaned.length > 7) {
            cleaned = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
        }
        return cleaned;
    };

    const handleSend = () => {
        let hasError = false;

        //name
        if (!name.trim()) {
            setErrorName("O campo de nome não pode estar vazio.");
            hasError = true;
        } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name)) {
            setErrorName("Nome inválido, use apenas letras.");
            hasError = true;
        } else {
            setErrorName("");
        }


        //PhoneNumber
        if (!phoneNumber.trim()) {
            setErrorPhoneNumber("O campo de telefone não pode estar vazio.");
            hasError = true;
        } else if (phoneNumber.replace(/\D/g, "").length < 11) {
            setErrorPhoneNumber("Número inválido.");
            hasError = true;
        } else {
            setErrorPhoneNumber("");
        }

        //Email
        if (!email.trim()) {
            setErrorEmail("O campo de e-mail não pode estar vazio.");
            hasError = true;
        } else if (!validateEmail(email)) {
            setErrorEmail("Digite um e-mail válido.");
            hasError = true;
        } else {
            setErrorEmail("");
        }

        if (hasError) return;

        setIsSent(true);

        // Resetar após 3 segundos
        setTimeout(() => {
            setIsSent(false);
            setName("");
            setPhoneNumber("");
            setEmail("");
        }, 3000);
    };

    return (
        <div className="flex flex-col w-full max-w-sm space-y-2">
            <h1>Deixe seus dados que entrarei em contato!</h1>

            <div>
                <Input
                    disabled={isSent}
                    placeholder="Nome Completo"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setErrorName(""); 
                    }}
                    className={`border ${errorName ? "border-red-500" : "border-gray-300"}`}
                />
                <p className="text-red-500 text-sm h-[20px]">{errorName}</p>
            </div>

            <div>
                <Input
                    disabled={isSent}
                    placeholder="Número de Telefone"
                    value={phoneNumber}
                    onChange={(e) => {
                        setPhoneNumber(formatPhone(e.target.value));
                        setErrorPhoneNumber(""); 
                    }}
                    className={`border ${errorPhoneNumber ? "border-red-500" : "border-gray-300"}`}
                />
                <p className="text-red-500 text-sm h-[20px]">{errorPhoneNumber}</p>
            </div>

            <div>
                <Input
                    disabled={isSent}
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorEmail(""); 
                    }}
                    className={`border ${errorEmail ? "border-red-500" : "border-gray-300"}`}
                />
                <p className="text-red-500 text-sm h-[20px]">{errorEmail}</p>
            </div>

            <Button
                className={`h-10 flex items-center justify-center transition-all duration-300 ${isSent ? "bg-green-500" : "bg-black"} hover:bg-gray-900`}
                onClick={handleSend}
                disabled={isSent}
            >
                {isSent ? <CheckIcon className="w-5 h-5" /> : "Enviar"}
            </Button>
        </div>
    );
}
