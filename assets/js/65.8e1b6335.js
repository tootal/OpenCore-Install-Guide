(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{585:function(e,t,r){"use strict";r.r(t);var o=r(25),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hardware-limitations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-limitations"}},[e._v("#")]),e._v(" Hardware Limitations")]),e._v(" "),r("p",[e._v("With macOS, there's numerous hardware limitation you need to be aware of before stepping foot into an installation. This is due to the limited amount of hardware Apple supports, and so we're either limited by what Apple or what patches the community has created.")]),e._v(" "),r("p",[e._v("The main hardware section to be verified are:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#cpu-support"}},[e._v("CPU")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#gpu-support"}},[e._v("GPU")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#motherboard-support"}},[e._v("Motherboard")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#storage-support"}},[e._v("Storage")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#wired-networking"}},[e._v("Wired Networking")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#wireless-networking"}},[e._v("Wireless Networking")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#miscellaneous"}},[e._v("Miscellaneous")])])]),e._v(" "),r("p",[e._v("And for more detailed guides on the subject, see here:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://dortania.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU Buyers Guide"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Check if your GPU is supported and which macOS version you can run.")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dortania.github.io/Wireless-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wireless Buyers Guide"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Check if your WiFi card is supported.")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anti-Hardware Buyers Guide"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Overall guide on what to avoid and what pitfalls your hardware may hit.")])])])]),e._v(" "),r("h2",{attrs:{id:"cpu-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpu-support"}},[e._v("#")]),e._v(" CPU Support")]),e._v(" "),r("p",[e._v("For CPU support, we have the following breakdown:")]),e._v(" "),r("ul",[r("li",[e._v("Intel's Desktop CPUs are supported.\n"),r("ul",[r("li",[e._v("Ivy Bridge through Comet Lake are supported by this guide.")])])]),e._v(" "),r("li",[e._v("Intel's High-End Desktops and Server CPUs.\n"),r("ul",[r("li",[e._v("Haswell-E through Cascade Lake X are supported by this guide.")])])]),e._v(" "),r("li",[e._v('Intel\'s Core "i" and Xeon series laptop CPUs\n'),r("ul",[r("li",[e._v("Ivy Bridge through Ice Lake are supported by this guide.")]),e._v(" "),r("li",[e._v("Note that Mobile Atoms, Celeron and Pentium CPUs are not supported")])])]),e._v(" "),r("li",[e._v("AMD's Desktop Bulldozer(15h), Jaguar(16h) and Ryzen(17h) CPUs\n"),r("ul",[r("li",[e._v("Laptop CPUs are "),r("strong",[e._v("not")]),e._v(" supported")]),e._v(" "),r("li",[e._v("Note that 3rd gen ThreadRipper is not officially without a KVM(Virtual Machine), 1st and 2nd gen ThreadRipper are properly supported")])])])]),e._v(" "),r("p",[r("strong",[e._v("For more in-depth information, see here: "),r("a",{attrs:{href:"https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anti-Hardware Buyers Guide"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"gpu-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gpu-support"}},[e._v("#")]),e._v(" GPU Support")]),e._v(" "),r("p",[e._v("GPU support becomes much more complicated due to the near-infinite amount of GPUs on the market, but the general breakdown is as follows:")]),e._v(" "),r("ul",[r("li",[e._v("AMD's GCN based GPUs are supported in the latest versions of macOS\n"),r("ul",[r("li",[e._v("AMD APUs are not supported however")]),e._v(" "),r("li",[e._v("AMD's "),r("a",{attrs:{href:"https://www.techpowerup.com/gpu-specs/amd-lexa.g806",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lexa based cores"),r("OutboundLink")],1),e._v(" from the Polaris series are also not supported")])])]),e._v(" "),r("li",[e._v("Nvidia's GPU support is complicated:\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_900_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maxwell(9XX)"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_10_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pascal(10XX)"),r("OutboundLink")],1),e._v(" GPUs are limited to macOS 10.13: High Sierra")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_20_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nvidia's Turing(20XX,"),r("OutboundLink")],1),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_16_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("16XX)"),r("OutboundLink")],1),e._v(" GPUs are "),r("strong",[e._v("not supported in any version of macOS")])]),e._v(" "),r("li",[e._v("Nvidia's "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/GeForce_700_series",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kepler(7XX)"),r("OutboundLink")],1),e._v(" GPUs are supported in the latest versions of macOS(Including macOS 11: Big Sur)\n"),r("ul",[r("li",[e._v("This is due to Apple still supporting a few "),r("a",{attrs:{href:"https://dortania.github.io/GPU-Buyers-Guide/modern-gpus/nvidia-gpu.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MacBook Pros with Nvidia GPUs"),r("OutboundLink")],1)])])])])]),e._v(" "),r("li",[e._v("Intel's "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Intel_Graphics_Technology",target:"_blank",rel:"noopener noreferrer"}},[e._v("GT2+ tier"),r("OutboundLink")],1),e._v(" series iGPUs\n"),r("ul",[r("li",[e._v("Ivy Bridge through Ice Lake iGPU support is covered in this guide")]),e._v(" "),r("li",[e._v("Note GT2 refers to the tier of iGPU, low-end GT1 iGPUs found on Pentiums, Celerons and Atoms are not supported in macOS")])])])]),e._v(" "),r("p",[e._v("And an important note for "),r("strong",[e._v("Laptops with discrete GPUs")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("90% of discrete GPUs will not work because they are wired in a configuration that macOS doesn't support (switchable graphics). With NVIDIA discrete GPUs, this is usually called Optimus. It is not possible to utilize these discrete GPUs for the internal display, so it is generally advised to disable them and power them off (will be covered later in this guide.)")]),e._v(" "),r("li",[e._v("However, in some cases, the discrete GPU powers any external outputs (HDMI, mini DisplayPort, etc.), which may or may not work; in the case that it will work, you will have to keep the card on and running.")]),e._v(" "),r("li",[e._v("However, there are some laptops that rarely do not have switchable graphics, so the discrete card can be used (if supported by macOS), but the wiring and setup usually cause issues.")])]),e._v(" "),r("p",[r("strong",[e._v("For a full list of supported GPUs, see the "),r("a",{attrs:{href:"https://dortania.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU Buyers Guide"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"motherboard-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motherboard-support"}},[e._v("#")]),e._v(" Motherboard Support")]),e._v(" "),r("p",[e._v("For the most part, all motherboards are supported as long as the CPU is. The sole exception being:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_AMD_chipsets",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD's B550 boards"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("There are currently no fixes for the boards besides running in a KVM(Virtual Machine), similar to AMD's 3rd gen ThreadRipper CPUs.")]),e._v(" "),r("h2",{attrs:{id:"storage-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage-support"}},[e._v("#")]),e._v(" Storage Support")]),e._v(" "),r("p",[e._v("For the most part, all SATA based drives are supported and the majority of NVMe drives as well. The few exceptions:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Samsung PM981, PM991 and Micron 2200S NVMe SSDs")]),e._v(" "),r("ul",[r("li",[e._v("These SSDs are not compatible out of the box (causing kernel panics) and therefore require "),r("a",{attrs:{href:"https://github.com/acidanthera/NVMeFix/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("NVMeFix.kext"),r("OutboundLink")],1),e._v(" to fix these kernel panics. Note that these drives may still cause boot issues even with NVMeFix.kext.")]),e._v(" "),r("li",[e._v("On a related note, Samsung 970 EVO Plus NVMe SSDs also had the same problem but it was fixed in a firmware update; get the update (Windows via Samsung Magician or bootable ISO) "),r("a",{attrs:{href:"https://www.samsung.com/semiconductor/minisite/ssd/download/tools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Also to note, laptops that use "),r("a",{attrs:{href:"https://www.intel.com/content/www/us/en/architecture-and-technology/optane-memory.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Optane Memory"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://www.micron.com/products/advanced-solutions/3d-xpoint-technology",target:"_blank",rel:"noopener noreferrer"}},[e._v("Micron 3D XPoint"),r("OutboundLink")],1),e._v(" for HDD acceleration are unsupported in macOS. Some users have reported success in Catalina with even read and write support but we highly recommend removing the drive to prevent any potential boot issues.")])])])]),e._v(" "),r("h2",{attrs:{id:"wired-networking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wired-networking"}},[e._v("#")]),e._v(" Wired Networking")]),e._v(" "),r("p",[e._v("Virtually all wired network adapters have some form of support in macOS, either by the built-in drivers or community made kexts. The main exceptions:")]),e._v(" "),r("ul",[r("li",[e._v("Intel's 2.5GBe i225 networking\n"),r("ul",[r("li",[e._v("Found on high-end Desktop Comet Lake boards")]),e._v(" "),r("li",[e._v("Workarounds are possible: "),r("a",{attrs:{href:"https://www.hackintosh-forum.de/forum/thread/48568-i9-10900k-gigabyte-z490-vision-d-er-l%C3%A4uft/?postID=606059#post606059",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source"),r("OutboundLink")],1),e._v(" and "),r("RouterLink",{attrs:{to:"/config.plist/comet-lake.html#deviceproperties"}},[e._v("Example")])],1)])]),e._v(" "),r("li",[e._v("Intel's server NICs\n"),r("ul",[r("li",[e._v("Workarounds are possible for "),r("a",{attrs:{href:"https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/",target:"_blank",rel:"noopener noreferrer"}},[e._v("X520 and X540 chipsets"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Mellanox and Qlogic server NICs")])]),e._v(" "),r("h2",{attrs:{id:"wireless-networking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wireless-networking"}},[e._v("#")]),e._v(" Wireless Networking")]),e._v(" "),r("p",[e._v("Most WiFi cards that come with laptops are not supported as they are usually Intel/Qualcomm. If you are lucky, you may have a supported Atheros card, but support only runs up to High Sierra.")]),e._v(" "),r("p",[e._v("The best option is getting a supported Broadcom card; see the "),r("a",{attrs:{href:"https://dortania.github.io/Wireless-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WiFi Buyer's Guide"),r("OutboundLink")],1),e._v(" for recommendations.")]),e._v(" "),r("h2",{attrs:{id:"miscellaneous"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous"}},[e._v("#")]),e._v(" Miscellaneous")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Fingerprint sensors")]),e._v(" "),r("ul",[r("li",[e._v("There is no way to emulate the Touch ID sensor as of currently, so fingerprint sensors will not work.")])])]),e._v(" "),r("li",[r("strong",[e._v("Windows Hello Face Recognition")]),e._v(" "),r("ul",[r("li",[e._v("Some laptops come with WHFR that is I2C connected (and used through your iGPU), those will not work.")]),e._v(" "),r("li",[e._v("Some laptops come with WHFR that is USB-Connected, if you're lucky, you may get the camera functionality, but nothing else.")])])]),e._v(" "),r("li",[r("strong",[e._v("Intel Smart Sound Technology")]),e._v(" "),r("ul",[r("li",[e._v("Laptops with Intel SST will not have anything connected through them (usually internal mic) work, as it is not supported. You can check with Device Manager on Windows.")])])]),e._v(" "),r("li",[r("strong",[e._v("Headphone Jack Combo")]),e._v(" "),r("ul",[r("li",[e._v("Some laptops with a combo headphone jack may not get Audio Input through them and will have to either use the built-in microphone or an external Audio Input device through USB.")])])]),e._v(" "),r("li",[r("strong",[e._v("Thunderbolt USB-C ports")]),e._v(" "),r("ul",[r("li",[e._v("(Hackintosh) Thunderbolt support is currently still iffy in macOS, even more so with Alpine Ridge controllers, which most current laptops have. There have been attempts to keep the controller powered on, which allows Thunderbolt and USB-C hotplug to work, but it comes at the cost of kernel panics and/or USB-C breaking after sleep. If you want to use the USB-C side of the port and be able to sleep, you must plug it in at boot and keep it plugged in.")]),e._v(" "),r("li",[e._v("Note: This does not apply to USB-C only ports - only Thunderbolt 3 and USB-C combined ports.")]),e._v(" "),r("li",[e._v("Disabling Thunderbolt in the BIOS will also resolve this.")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);