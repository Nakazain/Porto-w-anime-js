export default function ContactCard() {
  return (
    <div className="w-full max-w-md">
      <div className="relative bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="mb-8">
            <h4 className="text-2xl text-center font-bold text-white mb-2">
              Contact Me
            </h4>
          </div>

          <div className="space-y-2">
            <div className="group">
              <div className="flex items-center mb-2">
                <span className="text-xs font-medium uppercase tracking-wider">
                  Email
                </span>
              </div>
              <a
                href="mailto:naufalkaruniawanzain@gmail.com"
                className="block text-white hover:text-[#3b82f6] transition-colors duration-200"
              >
                naufalkaruniawanzain@gmail.com
              </a>
            </div>

            <div className="h-px bg-neutral-700 my-2" />
            <div>
              <div className="space-y-3">
                <a
                  href="https://github.com/Nakazain"
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-700/50 hover:border-[#3b82f6]/50 transition-all duration-200 group"
                >
                  <div className="flex-1">
                    <div className="text-sm text-white group-hover:text-[#3b82f6] transition-colors">
                      GitHub
                    </div>
                    <div className="text-xs">Nakazain</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/naufal-karuniawan-zain-503239366"
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-700/50 hover:border-[#8b5cf6]/50 transition-all duration-200 group"
                >
                  <div className="flex-1">
                    <div className="text-sm text-white group-hover:text-[#8b5cf6] transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-xs">Naufal Karuniawan Zain</div>
                  </div>
                </a>

                <a
                  href="https://twitter.com/Nakazenzenzen"
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-700/50 hover:border-[#22d3ee]/50 transition-all duration-200 group"
                >
                  <div className="flex-1">
                    <div className="text-sm text-white group-hover:text-[#22d3ee] transition-colors">
                      Twitter
                    </div>
                    <div className="text-xs">@Nakazenzenzen</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/nakazwn/"
                  className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-700/50 hover:border-[#22d3ee]/50 transition-all duration-200 group"
                >
                  <div className="flex-1">
                    <div className="text-sm text-white group-hover:text-[#22d3ee] transition-colors">
                      Instagram
                    </div>
                    <div className="text-xs">@nakazwn</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
