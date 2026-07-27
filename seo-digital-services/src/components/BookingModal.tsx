import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Mail, Send, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { ContactInquiry } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSubject = 'General SEO Inquiry',
}) => {
  const [formData, setFormData] = useState<ContactInquiry>({
    fullName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    selectedPlanOrAddon: initialSubject,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, selectedPlanOrAddon: initialSubject }));
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white border border-[#e8e2d8] rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-[#231e1a] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#a67c52] text-white flex items-center justify-center font-black text-base shadow-sm">
              S
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">Reach Out to SEO Digital Services</h3>
              <p className="text-xs text-stone-300">Direct Consultation & Custom Quote</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-xl hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-stone-900">Thank You For Reaching Out!</h4>
                <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                  We have received your message regarding <strong className="text-stone-900">{formData.selectedPlanOrAddon}</strong>. An organic SEO strategist will review your website and contact you within 1 hour.
                </p>
              </div>

              <div className="bg-[#faf8f5] border border-[#e8e2d8] p-4 rounded-2xl max-w-md mx-auto text-xs text-stone-700 space-y-1 text-center">
                <div className="font-extrabold text-stone-900">Inquiry Received</div>
                <div>An organic SEO strategist will reach out to you directly via your provided email address.</div>
              </div>

              <button
                onClick={handleReset}
                className="bg-[#a67c52] hover:bg-[#8e653d] text-white font-extrabold px-8 py-3 rounded-xl transition-all text-sm shadow-xs"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="bg-[#f7efe3] border border-[#e8dac8] p-3 rounded-xl flex items-center gap-2 text-xs text-[#6e4d2f] font-medium">
                <Sparkles className="w-4 h-4 text-[#a67c52] shrink-0" />
                <span>Subject: <strong>{formData.selectedPlanOrAddon}</strong></span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#e8e2d8] rounded-xl text-xs text-stone-900 focus:outline-none focus:border-[#a67c52] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@yourcompany.com"
                    className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#e8e2d8] rounded-xl text-xs text-stone-900 focus:outline-none focus:border-[#a67c52] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#e8e2d8] rounded-xl text-xs text-stone-900 focus:outline-none focus:border-[#a67c52] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Your Website URL</label>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#e8e2d8] rounded-xl text-xs text-stone-900 focus:outline-none focus:border-[#a67c52] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Inquiry / Special Requirements</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your target keywords, competitors, or current organic ranking goals..."
                  className="w-full px-3.5 py-2.5 bg-[#faf8f5] border border-[#e8e2d8] rounded-xl text-xs text-stone-900 focus:outline-none focus:border-[#a67c52] focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
                <div className="text-[11px] text-stone-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Your privacy is 100% protected. No spam ever.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#a67c52] hover:bg-[#8e653d] text-white font-extrabold text-xs px-7 py-3 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Reach Out Inquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
