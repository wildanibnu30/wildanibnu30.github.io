import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/solidworks.png";
import Tools2 from "/assets/tools/inventor.png";
import Tools3 from "/assets/tools/autocad.png";
import Tools4 from "/assets/tools/fusion360.png";
import Tools5 from "/assets/tools/blender.png";
import Tools6 from "/assets/tools/mastercam.png";
import Tools7 from "/assets/tools/office.png";
import Tools8 from "/assets/tools/capcut.png";
import Tools9 from "/assets/tools/canva.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Solidworks ★★★☆☆",
    ket: "3D design & simulation",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Inventor ★★★★☆",
    ket: "3D design & simulation",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Autocad ★★★☆☆",
    ket: "2D drafting & 3D Basic",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Fusion 360 ★☆☆☆☆",
    ket: "CAD/CAM/CAE Integration",
    dad: "700",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Blender ★☆☆☆☆",
    ket: "3D Rendering & Animation",
    dad: "800",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Mastercam ★☆☆☆☆",
    ket: "CNC Programming & Machining",
    dad: "900",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Office ★★★☆☆",
    ket: "Documentation & Calculation",
    dad: "400",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Cap Cut ★★★☆☆",
    ket: "Video Editing & Motion",
    dad: "500",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Canva ★★★☆☆",
    ket: "Visual Design & Branding",
    dad: "1000",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Mechanical Parts",
    desk: "Kumpulan desain komponen.",
    tools: ["Solidworks", "Inventor"],
    dad: "200",
    file: "/assets/proyek/PDF/proyek1.pdf",
    type: "pdf",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Mechanical Assembly",
    desk: "Kumpulan rakitan beberapa komponen",
    tools: ["Solidworks", "Inventor"],
    dad: "300",
    file: "/assets/proyek/PDF/proyek2.pdf",
    type: "pdf",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Technical Drawing",
    desk: "Gambar teknik untuk proses produksi",
    tools: ["Solidworks", "Inventor", "Autocad"],
    dad: "400",
    file: "/assets/proyek/PDF/proyek3.pdf",
    type: "pdf",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Machine Simulation",
    desk: "Simulasi pergerakan mekanisme mesin industri.",
    tools: ["Solidworks", "Inventor"],
    dad: "500",
    file: "/assets/proyek/mp4/proyek4.mp4",
    type: "video",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Liquid Packaging Machine",
    desk: "Rancangan mesin untuk produk cair kental.",
    tools: ["Solidworks"],
    dad: "600",
    file: "/assets/proyek/PDF/proyek5.pdf",
    type: "pdf",
  },
];