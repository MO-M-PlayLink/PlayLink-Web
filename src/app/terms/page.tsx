import { POLICY_CONTENT } from "@/constants";
import { parseMarkdown } from "@/lib/markdown";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description: "PlayLink 서비스 이용약관을 확인하세요.",
  openGraph: {
    title: "이용약관 | PlayLink",
    description: "PlayLink 서비스 이용약관",
  },
};

export default function TermsOfService() {
  const termsContent = POLICY_CONTENT.agreeTerms();

  return (
    <main className="min-h-screen bg-white px-4 py-12 pt-16">
      <div className="mx-auto max-w-screen-2xl">
        {/* Tab Navigation */}
        <div className="mb-8 flex gap-6 border-b border-gray-200">
          <a
            href="/privacy"
            className="border-b-2 border-transparent pb-3 text-base font-medium text-gray-600 hover:text-gray-900"
          >
            개인정보 처리방침
          </a>
          <a
            href="/terms"
            className="border-b-2 border-primary-600 pb-3 text-base font-semibold text-primary-600"
          >
            이용약관
          </a>
        </div>

        <div className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none [&_h1]:mb-6 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:text-gray-700">
            {parseMarkdown(termsContent)}
          </div>
        </div>
      </div>
    </main>
  );
}
