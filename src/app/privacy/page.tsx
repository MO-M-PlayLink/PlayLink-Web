import { POLICY_CONTENT } from "@/constants";
import { parseMarkdown } from "@/lib/markdown";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "PlayLink 개인정보 처리방침을 확인하세요.",
  openGraph: {
    title: "개인정보 처리방침 | PlayLink",
    description: "PlayLink 개인정보 처리방침",
  },
};

export default function PrivacyPolicy() {
  const privacyContent = POLICY_CONTENT.agreePrivacy();

  return (
    <main className="min-h-screen bg-white px-4 py-12 pt-16">
      <div className="mx-auto max-w-screen-2xl">
        {/* Tab Navigation */}
        <div className="mb-8 flex gap-6 border-b border-gray-200">
          <a
            href="/privacy"
            className="border-b-2 border-primary-600 pb-3 text-base font-semibold text-primary-600"
          >
            개인정보 처리방침
          </a>
          <a
            href="/terms"
            className="border-b-2 border-transparent pb-3 text-base font-medium text-gray-600 hover:text-gray-900"
          >
            이용약관
          </a>
        </div>

        <div className="p-8 md:p-12">
          <div className="prose prose-lg max-w-none [&_h1]:mb-6 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900 [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:text-gray-700">
            {parseMarkdown(privacyContent)}
          </div>
        </div>
      </div>
    </main>
  );
}
