"use client";

export default function ContestPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20 px-4">
      {/* Round 1 */}
      <div className="w-full max-w-3xl bg-gray-300  mb-6">
        <h2 className="font-cerapro font-black text-xl  text-black px-16 py-3">
          Round 1
        </h2>
        <div className="bg-[#363434] text-gray-200 p-6 ">
          <p className="italic text-sm leading-relaxed">
            problem statement nshia siajsi josnb yeyik huw hdbb diihd jnihdwuh
            khwudhh jdiwh jhud djsh wyeusb jaoqlph dhydisd nchysjd nhysisb shdu
            ubhd huhhj nuhhn uhefu hygqg uheudhuhd jhiwhj jduwhb hiwb uhw uhhw
            ytw83 huhb
          </p>
        </div>
      </div>

      {/* Round 2 */}
      <div className="w-full max-w-3xl bg-gray-300  mb-6 relative overflow-hidden">
        <h2 className="font-cerapro font-black text-xl text-black px-16 py-3">
          Round 2
        </h2>
        <div className="bg-[#363434] text-gray-400 p-6 select-none relative">
          <p className="italic text-sm leading-relaxed blur-xs opacity-100">
            problem statement nshia siajsi josnb yeyik huw hdbb diihd jnihdwuh
            khwudhh jdiwh jhud djsh wyeusb jaoqlph dhydisd nchysjd nhysisb shdu
            ubhd huhhj nuhhn uhefu hygqg uheudhuhd jhiwhj jduwhb hiwb uhw uhhw
            ytw83 huhb
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className=" p-4 ">
              <img
                src="/contest_lock_image.png"
                alt="Locked"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Round 3 */}
      <div className="w-full max-w-3xl bg-gray-300 mb-6 relative overflow-hidden">
        <h2
          className="font-cerapro font-black  text-xl text-black px-16 py-3"
        >
          Round 3
        </h2>
        <div className="bg-[#363434] text-gray-400 p-6 select-none relative">
          <p className="italic text-sm leading-relaxed blur-xs opacity-100">
            problem statement nshia siajsi josnb yeyik huw hdbb diihd jnihdwuh
            khwudhh jdiwh jhud djsh wyeusb jaoqlph dhydisd nchysjd nhysisb shdu
            ubhd huhhj nuhhn uhefu hygqg uheudhuhd jhiwhj jduwhb hiwb uhw uhhw
            ytw83 huhb
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className=" p-4 ">
              <img
                src="/contest_lock_image.png"
                alt="Locked"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
