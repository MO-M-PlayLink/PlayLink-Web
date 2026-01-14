import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-12">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* App Icon */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/icon.png"
              alt="PlayLink Logo"
              width={120}
              height={120}
              className="rounded-3xl shadow-lg"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl">
            PlayLink
          </h1>
          <p className="mb-6 text-2xl font-semibold text-primary-600 sm:text-3xl">
            운동을 함께, 경기를 함께
          </p>
          <p className="mb-12 text-lg text-gray-600 sm:text-xl">
            스포츠를 통해 사람들을 연결하고, 건강한 라이프스타일을 촉진합니다.
            <br />
            운동 파트너를 찾거나 경기를 함께 관람할 멤버를 만나보세요!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-12 text-gray-300">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">PlayLink</h4>
              <p className="text-sm">
                스포츠를 통해 사람들을 연결하고,
                <br />
                건강한 라이프스타일을 촉진합니다.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">문의</h4>
              <p className="mb-4 text-sm">이메일: hwattoo-pae@naver.com</p>
              <div className="space-y-2 text-sm">
                <div>
                  <Link href="/privacy" className="hover:text-white hover:underline">
                    개인정보 처리방침
                  </Link>
                </div>
                <div>
                  <Link href="/terms" className="hover:text-white hover:underline">
                    이용약관
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 화투패. All rights reserved.</p>
            <p className="mt-2 text-xs text-gray-500">Version 1.2.3</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
