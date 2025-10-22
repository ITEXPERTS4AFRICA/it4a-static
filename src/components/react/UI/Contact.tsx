import  { useState } from "react";
// import { Alert, AlertDescription } from "@/components/ui/alert";
import GlowButton from "@/components/react/UI/components/GlowButton";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  // Send,
  // CheckCircle,
  // GlassesIcon,
} from "lucide-react";

import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DecryptedText from "./Text/DecryptedText";
import LightCommunicationBackground from "./Animation/LightCommunicationBackground";
import { object } from "astro:schema";

export default function Contact({ t }: { t?: Record<string, any> }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [error, setError] = useState("");

  // Locale-driven texts (use provided `t` bundle with sensible defaults)
  const localeTexts = {
    heroPre: t?.contact?.hero_pre ?? "Contactez",
    heroPost: t?.contact?.hero_post ?? "Nous",
    heroDescription:
      t?.contact?.hero_description ??
      "Une question ? Un projet ? Parlons-en ! Notre équipe est là pour vous accompagner dans votre transformation numérique.",
    formTitle: t?.contact?.form_title ?? "Envoyez-nous un message",
    formDescription:
      t?.contact?.form_description ??
      "Cliquez sur le bouton ci-dessous et nous vous recontacterons.",
    nameLabel: t?.contact?.form_labels?.name ?? "Nom complet *",
    emailLabel: t?.contact?.form_labels?.email ?? "Adresse email *",
    messageLabel: t?.contact?.form_labels?.message ?? "Message *",
    namePlaceholder:
      t?.contact?.form_placeholders?.name ?? "Votre nom et prénom",
    emailPlaceholder:
      t?.contact?.form_placeholders?.email ?? "votre.email@exemple.com",
    messagePlaceholder:
      t?.contact?.form_placeholders?.message ??
      "Décrivez votre projet ou votre besoin...",
    submitText: t?.contact?.submit_text ?? "Envoyer le message",
    contactFormSubmint:
      t?.contact?.contact_form_submint ?? "Envoyer un message",
    submittingText: t?.contact?.submitting_text ?? "Envoi en cours...",
    successMessage:
      t?.contact?.success_message ??
      "Votre message a été transmis avec succès ! Nous vous recontacterons très bientôt.",
    sendAnother: t?.contact?.send_another ?? "Envoyer un autre message",
    contactHeader: t?.footer?.contact_title ?? "Nos coordonnées",
    contactSubtitle:
      t?.contact?.contact_subtitle ??
      "Plusieurs moyens de nous contacter selon votre préférence.",
    mapTitle: t?.contact?.map_title ?? "Notre localisation",
    phoneText: t?.contact?.phone_text ?? "+225 01 23 45 67 89",
    phoneSentence:
      t?.contact?.phone_sentence ??
      "Vous pouvez aussi nous contacter directement par téléphone au",
    faqTitle: t?.contact?.faq?.title ?? "Questions fréquentes",
    faqQ1: t?.contact?.faq?.q1 ?? "Intervenez-vous dans toute l'Afrique ?",
    faqA1:
      t?.contact?.faq?.a1 ??
      "Basés en Côte d'Ivoire, nous intervenons dans plusieurs pays d'Afrique de l'Ouest et proposons des solutions à distance pour le reste du continent.",
    faqQ2: t?.contact?.faq?.q2 ?? "Quel est votre délai d'intervention ?",
    faqA2:
      t?.contact?.faq?.a2 ??
      "Pour les urgences, nous intervenons sous 24h. Pour les projets planifiés, nous nous adaptons à vos contraintes et délais.",
    faqQ3: t?.contact?.faq?.q3 ?? "Proposez-vous des contrats de maintenance ?",
    faqA3:
      t?.contact?.faq?.a3 ??
      "Oui, nous proposons différents contrats de maintenance adaptés à la taille et aux besoins de votre entreprise.",
    contactPhoneLabel: t?.contact?.labels?.phone ?? "Téléphone",
    contactEmailLabel: t?.contact?.labels?.email ?? "Email",
    contactAddressLabel: t?.contact?.labels?.address ?? "Adresse",
    contactHoursLabel: t?.contact?.labels?.hours ?? "Horaires",
    contactPhoneDesc:
      t?.contact?.descriptions?.phone ??
      "Appelez-nous pour un conseil immédiat",
    contactEmailDesc:
      t?.contact?.descriptions?.email ??
      "Écrivez-nous, nous répondons sous 24h",
    contactAddressDesc: t?.contact?.descriptions?.address ?? "Côte d'Ivoire",
    contactHoursDesc:
      t?.contact?.descriptions?.hours ?? "Support d'urgence 24/7",
  };

  const errorsTexts = {
    required: t?.contact?.errors?.required ?? "Tous les champs sont requis",
    invalidEmail:
      t?.contact?.errors?.invalid_email ??
      "Veuillez saisir une adresse email valide",
    network:
      t?.contact?.errors?.network ??
      "Problème de connexion. Vérifiez votre connexion internet et réessayez.",
    notLoggedIn:
      t?.contact?.errors?.not_logged_in ??
      "Vous devez être connecté pour envoyer un message. Veuillez vous connecter et réessayer.",
    serverConfig:
      t?.contact?.errors?.server_config ??
      "Erreur de configuration du serveur. Contactez l'administrateur.",
    unknown:
      t?.contact?.errors?.unknown ??
      "Erreur lors de l'envoi du message. Veuillez réessayer ou nous contacter directement par téléphone.",
  };

  // const handleInputChange = (e: {
  //   target: { name: string; value: string };
  // }) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setError("");

  //   try {
  //     // Validation côté client
  //     if (
  //       !formData.name.trim() ||
  //       !formData.email.trim() ||
  //       !formData.message.trim()
  //     ) {
  //       throw new Error(errorsTexts.required);
  //     }

  //     // Validation email côté client
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailRegex.test(formData.email)) {
  //       throw new Error(errorsTexts.invalidEmail);
  //     }

  //     // Appel à l'API Astro
  //     const response = await fetch("/api/resend", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: formData.name.trim(),
  //         email: formData.email.trim(),
  //         message: formData.message.trim(),
  //       }),
  //     });

  //     // Vérifier si la réponse est du JSON
  //     const contentType = response.headers.get("content-type");
  //     if (!contentType?.includes("application/json")) {
  //       const textResponse = await response.text();
  //       console.error("Non-JSON response:", textResponse.substring(0, 500));
  //       throw new Error(errorsTexts.serverConfig);
  //     }

  //     const result = await response.json();

  //     if (!response.ok) {
  //       throw new Error(result.error || errorsTexts.unknown);
  //     }

  //     if (result.success) {
  //       setIsSubmitted(true);
  //       // Réinitialiser le formulaire après un court délai pour laisser voir le message de succès
  //       setTimeout(() => {
  //         setFormData({ name: "", email: "", message: "" });
  //       }, 100);
  //     } else {
  //       throw new Error(result.error || errorsTexts.unknown);
  //     }
  //   } catch (err: any) {
  //     // Messages d'erreur personnalisés
  //     if (err.message?.includes("Failed to fetch")) {
  //       setError(errorsTexts.network);
  //     } else if (err.message?.includes("not logged in")) {
  //       setError(errorsTexts.notLoggedIn);
  //     } else if (err.name === "SyntaxError" && err.message?.includes("JSON")) {
  //       setError(errorsTexts.serverConfig);
  //     } else {
  //       setError(err.message || errorsTexts.unknown);
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // Fonction pour réinitialiser le formulaire
  // const resetForm = () => {
  //   setIsSubmitted(false);
  //   setError("");
  //   setFormData({ name: "", email: "", message: "" });
  // };

  // Build contact info from locale if available, falling back to defaults
  const footerContacts: Array<any> = t?.footer?.contactInfo ?? [];
  const contactInfo = footerContacts.length
    ? footerContacts.map((item: any) => {
        const label = item.label || item.value || "";
        let IconComp = Mail;
        let color = "text-green-600 bg-green-100";
        if (/phone|tél|tel|téléphone|phone/i.test(label)) {
          IconComp = Phone;
          color = "text-blue-600 bg-blue-100";
        } else if (/address|adresse|addr/i.test(label)) {
          IconComp = MapPin;
          color = "text-orange-600 bg-orange-100";
        } else if (/time|horaire|horaires|hours/i.test(label)) {
          IconComp = Clock;
          color = "text-purple-600 bg-purple-100";
        }
        return {
          icon: IconComp,
          title: item.label,
          value: item.value,
          description: item.description || "",
          color,
        };
      })
    : [
        {
          icon: Phone,
          title: "Téléphone",
          value: "+225 0748290303",
          description: "Appelez-nous pour un conseil immédiat",
          color: "text-blue-600 bg-blue-100",
        },
        {
          icon: Mail,
          title: "Email",
          value: "info@itexperts4africa.com.com",
          description: "Écrivez-nous, nous répondons sous 24h",
          color: "text-green-600 bg-green-100",
        },
        {
          icon: MapPin,
          title: "Adresse",
          value: "cité lauriers 17, 17 Bd François Mitterrand, Abidjan",
          description: "Côte d'Ivoire",
          color: "text-orange-600 bg-orange-100",
        },
        {
          icon: Clock,
          title: "Horaires",
          value: "Lun - Ven : 8h30 - 18h00",
          description: "Support d'urgence 24/7",
          color: "text-purple-600 bg-purple-100",
        },
      ];

  let mail = {
    to: "contact@itexperts4africa.com",
    subject: "Contact form itexperts4africa.com <your name> <your subject>",
    object: "<your object>",
    body: "Welcome to itexperts4africa.com <your message>",
  };
  const mailto = `mailto:${mail.to}?subject=${mail.subject}&object=${mail.object}&body=${mail.body}`;

  return (
    <div className="w-full text-white text-sm md:text-lg">
      {/* Hero Section */}
      <LightCommunicationBackground className="absolute inset-0 -z-10">
        <section className="relative bg-gradient-to-br backdrop-blur-xs from-transparent via-black/50 to-it4a-primary/50 py-10 pt-20 lg:py-32">
          <div className="text-center">
            <motion.h1
              className="text-4xl pt-20 md:pt-40 lg:text-5xl font-bold text-gray-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <DecryptedText
                speed={20}
                animateOn="view"
                text={localeTexts.heroPre}
              />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-it4a-primary to-it4a-orange">
                <DecryptedText
                  animateOn="view"
                  speed={10}
                  text={localeTexts.heroPost}
                />
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <DecryptedText
                speed={100}
                useOriginalCharsOnly={true}
                animateOn="view"
                text={localeTexts.heroDescription}
              />
            </motion.p>
          </div>
        </section>
      </LightCommunicationBackground>

      {/* Contact Form & Info */}
      <section className="py-20 relative bg-gradient-to-b from-it4a-secondary to-it4a-primary/20 text-white">
        <div className="custom-shape-divider-top-1752494969">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <rect x="1200" height="3.6"></rect>
            <rect height="3.6"></rect>
            <path
              d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <style>
          {`
            .custom-shape-divider-top-1752494969 {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              overflow: hidden;
              line-height: 0;
            }

            .custom-shape-divider-top-1752494969 svg {
              position: relative;
              display: block;
              width: calc(100% + 1.3px);
              height: 224px;
            }

            .custom-shape-divider-top-1752494969 .shape-fill {
              fill: #5dbbe9;
            }
          `}
        </style>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
            >
              <div className="bg-white/10 relative border-none shadow-lg h-full">
                <div className="p-8">
                  <div className="text-xl md:text-2xl font-bold mb-2">
                    {localeTexts.formTitle}
                  </div>
                  <p className=" text-gray-100">
                    {localeTexts.formDescription}
                  </p>
                </div>
                {/* <div className="p-8 pt-0">
                  {isSubmitted ? (
                    <div className="space-y-4">
                      <Alert className="border-green-200/60 bg-green-100/90 backdrop-blur-2xl">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                          {localeTexts.successMessage}
                        </AlertDescription>
                      </Alert>
                      <GlowButton
                        variant="secondary"
                        onClick={resetForm}
                        className="w-full text-center justify-center text-white "
                      >
                        {localeTexts.sendAnother}
                      </GlowButton>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 md:space-y-6"
                    >
                      {error && (
                        <Alert variant="destructive">
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <div>
                        <label
                          htmlFor="name"
                          className="block font-medium text-gray-100 mb-2"
                        >
                          {localeTexts.nameLabel}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={localeTexts.namePlaceholder}
                          className="h-12 bg-white/50"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-100 mb-2"
                        >
                          {localeTexts.emailLabel}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={localeTexts.emailPlaceholder}
                          className="h-12 bg-white/50"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-100 mb-2"
                        >
                          {localeTexts.messageLabel}
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={localeTexts.messagePlaceholder}
                          rows={6}
                          className="resize-none md:min-h-24 bg-white/50"
                          disabled={isSubmitting}
                        />
                      </div>

                      <GlowButton
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full gap-1.5 text-center justify-center text-white text-xs md:text-lg"
                      >
                        {isSubmitting ? (
                          localeTexts.submittingText
                        ) : (
                          <>
                            <Send className="h-4 md:h-full md:w-6" /> {localeTexts.submitText}
                          </>
                        )}
                      </GlowButton>

                      <div className="text-center">
                        <p className="text-sm text-gray-200">
                          {localeTexts.phoneSentence} {" "}
                          <span className="font-semibold text-it4a-primary">
                            {localeTexts.phoneText}
                          </span>
                        </p>
                      </div>
                    </form>
                  )}
                </div> */}

                {/* A ramplaçer pour plus tard */}
                <div className="p-8 ">
                  <GlowButton
                    variant="primary"
                    onClick={() => {
                      window.location.href = mailto;
                    }}
                    className="w-full text-center justify-center text-white text-xs md:text-lg"
                  >
                    {localeTexts.contactFormSubmint}
                  </GlowButton>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="space-y-2 md:space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                  {localeTexts.contactHeader}
                </h2>
                <p className=" text-gray-300 mb-2">
                  {localeTexts.contactSubtitle}
                </p>
              </div>

              <div className="grid gap-1 md:gap-3">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/10 border-none shadow-xs hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center space-x-2">
                        <div
                          className={`w-6 h-6 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${info.color}`}
                        >
                          <info.icon className="md:h-6 md:w-6 h-3 w-3" />
                        </div>
                        <div className="flex flex-col flex-1 justify-center items-start">
                          <h3 className="text-xs md:text-lg font-Poppins text-gray-100 font-bold">
                            {info.title}
                          </h3>
                          <p className="text-gray-100 text-xs">{info.value}</p>
                          <p className="text-gray-100 text-xs md:text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="border-none bg-white/10 col-span-full shadow-lg"
            >
              <div className="p-6">
                <div className="aspect-video bg-gray-10 rounded-lg flex items-center justify-center">
                  <iframe
                    title="Google Maps Embed"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d616.7870525443217!2d-3.9263708229315584!3d5.376691319980471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eded03330515%3A0x2e2d63a30d5fc6bd!2sLaurier%2017!5e1!3m2!1sfr!2sci!4v1757026258482!5m2!1sfr!2sci"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="py-10 md:py-20 bg-gradient-to-b from-black/90 to-it4a-primary/50 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-it4a-primary to-it4a-orange mb-2 md:mb-6">
            {localeTexts.faqTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-it4a-primary to-it4a-orange/50">
                {localeTexts.faqQ1}
              </h3>
              <p>{localeTexts.faqA1}</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-it4a-primary to-it4a-orange/50">
                {localeTexts.faqQ2}
              </h3>
              <p>{localeTexts.faqA2}</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-it4a-primary to-it4a-orange/50">
                {localeTexts.faqQ3}
              </h3>
              <p>{localeTexts.faqA3}</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
