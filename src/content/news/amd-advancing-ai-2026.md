---
title: "Advancing AI 2026！AMD 為代理式 AI 帶來第 6 代 AMD EPYC 等解決方案"
pubDate: 2026-07-25
tag: "產品新知"
description: "AMD 於 Advancing AI 2026 大會發表第 6 代 EPYC Venice CPU（最高 256 核心、PCIe Gen 6）、Instinct MI400 系列 GPU（CDNA 5 / 2nm / 432 GB HBM4）、Helios 72-GPU 機架（2.9 EFLOPS FP4）及 Ryzen AI Embedded X100 等全棧解決方案。"
image: "/images/amd-ai-chip-tech.jpg"
author: "沅品科技硬體研究團隊"
---

## 活動概述

AMD 於 2026 年 7 月 22 日至 23 日在舊金山 Moscone Center 舉辦年度旗艦活動「Advancing AI 2026」，以「代理式 AI（Agentic AI）」為核心主題，一氣發布多款全新產品與解決方案，涵蓋從資料中心到邊緣運算的完整 AI 堆疊。

---

## 第 6 代 AMD EPYC™「Venice」伺服器 CPU

AMD 正式推出第 6 代 AMD EPYC™ 9006 系列伺服器處理器，內部代號「Venice」，採用全新 Zen 6 架構。這是首款支援 **PCIe Gen 6** 的伺服器 CPU。

### 產品線規格總覽

| 規格項目 | Zen 6 標準版 | Zen 6c 高密度版 | 高頻版 |
|---------|-------------|----------------|--------|
| 最高核心數 | 128 核心 / 256 執行緒 | 256 核心 / 512 執行緒 | 96 核心 |
| TDP | 600W | 600W | 600W |
| 記憶體通道 | 16 通道 MRDIMM | 16 通道 MRDIMM | — |
| 記憶體速度 | 最高 12,800 MT/s | 最高 12,800 MT/s | — |
| 記憶體頻寬 | **1.6 TB/s（每插槽）** | **1.6 TB/s（每插槽）** | — |
| I/O 介面 | PCIe Gen 6 | PCIe Gen 6 | PCIe Gen 6 |
| 時脈 | — | — | 最高 5.0 GHz |

新一代 EPYC 針對代理式 AI 工作負載進行了深度優化：

- **記憶體頻寬翻倍：** 16 通道 MRDIMM 搭配 12,800 MT/s 記憶體速度，提供每插槽 1.6 TB/s 的記憶體頻寬，較上代 Genoa 提升超過一倍，大幅緩解 Agentic AI 多工作載載的記憶體瓶頸。
- **PCIe Gen 6 支援：** 成為首款導入 PCIe Gen 6 的伺服器處理器，為高速 GPU 互連與 NVMe SSD 提供雙倍頻寬。
- **Zen 6c 高密度版本：** 針對雲端與虛擬化場景，提供最高 256 核心的高密度選項，TDP 達 600W。

AMD 同時宣布與 Microsoft Azure 擴展合作，推出基於 EPYC Venice 的新一代 Azure 執行個體，並深化 Helios 機架級部署方案。

---

## AMD Instinct™ MI400 系列 GPU：CDNA 5 架構首登 2 奈米節點

本次大會最矚目的產品之一，是基於全新 CDNA 5 架構的 AMD Instinct MI400 系列資料中心 GPU。這是 AMD 首款採用 **2 奈米製程** 的 GPU 產品線，涵蓋多個型號以滿足不同層級的 AI 基礎設施需求。

### 旗艦型號：Instinct MI455X 規格詳情

| 規格項目 | 詳細數據 |
|---------|---------|
| GPU 架構 | CDNA 5 |
| 製程節點 | 2 nm |
| 電晶體數量 | **3,200 億顆**（多晶片模組封裝） |
| 封裝架構 | 2 個 Fabric Dies + 2 個 I/O Dies 多晶片模組 |
| 記憶體容量 | **432 GB HBM4** |
| 記憶體頻寬 | **23.3 TB/s** |
| FP4 (MXFP4) 運算效能 | **40 PFLOPS** |
| 軟體支援 | ROCm.ai — PyTorch、TensorFlow、JAX、vLLM、Triton Day-0 支援 |

MI400 系列完整產品線包含三款型號：**MI430X**、**MI440X** 與旗艦 **MI455X**，分別針對不同的運算密度與功耗需求進行設計。

AMD 更宣布與 OpenAI 合作，將 OpenAI 的 Triton 編譯框架整合至 AMD ROCm 軟體堆疊中，針對 MI455X 進行深度最佳化，進一步縮小與競爭對手的性能差距。

---

## AMD Instinct MI455X vs NVIDIA Vera Rubin NVL72：規格深度對比

在代理式 AI 時代的資料中心戰場上，AMD Helios 與 NVIDIA Vera Rubin NVL72 被視為最直接競爭對手。以下為兩款機架級平台的完整規格對比。

### 單卡規格對比（MI455X vs Rubin R200）

| 規格項目 | AMD Instinct MI455X | NVIDIA Vera Rubin R200 |
|---------|-------------------|----------------------|
| GPU 架構 | CDNA 5 | Vera Rubin |
| 製程節點 | **2 nm**（TSMC） | **3 nm**（TSMC） |
| 電晶體數量 | 3,200 億顆 | 3,360 億顆 |
| 封裝架構 | 多晶片模組（2 Fabric Dies + 2 I/O Dies） | 雙晶片模組（Dual-Die） |
| 記憶體容量 | **432 GB HBM4** | 288 GB HBM4 |
| 記憶體頻寬 | **23.3 TB/s** | 22 TB/s |
| FP4 (MXFP4) 推論效能 | 40 PFLOPS | **50 PFLOPS** |
| FP8 Tensor 效能 | — | — |
| FP32 SGEMM | — | 800 TFLOPS |
| FP64 DGEMM | — | 400 TFLOPS |

**單卡規格重點分析：**

- **記憶體容量優勢：** MI455X 的 432 GB HBM4 比 Rubin R200 的 288 GB 多出 **50%**，在處理大型語言模型（LLM）時可容納更多參數於單一 GPU 記憶體中，減少跨卡分割需求。
- **記憶體頻寬領先：** 23.3 TB/s 對比 22 TB/s，MI455X 在資料密集型 Agentic AI 工作負載中具備更低的延遲。
- **製程世代差異：** Rubin R200 採用 3 nm 製程，MI455X 則領先採用 2 nm，意味著後者在相同面積下能容納更多電晶體。
- **推理運算：** Rubin R200 的 FP4 推論效能（50 PFLOPS）高於 MI455X（40 PFLOPS），但在 FP8 訓練與一般科學運算（FP32/FP64）方面，NVIDIA 仍有明顯優勢。

### 機架級規格對比（Helios 72-GPU vs Vera Rubin NVL72）

| 規格項目 | AMD Helios (72× MI455X) | NVIDIA Vera Rubin NVL72 (72× R200) |
|---------|------------------------|-----------------------------------|
| GPU 總數量 | 72 張 | 72 張 |
| 總 HBM4 記憶體 | **31.1 TB** | **20.7 TB** |
| 總記憶體頻寬 | **1.4 PB/s**（≈1,679 TB/s） | **~1,580 TB/s** |
| FP4 推論效能 | **2.9 exaFLOPS** | **3.6 exaFLOPS** |
| FP8 訓練效能 | **1.4 exaFLOPS** | — |
| FP32 SGEMM（總） | ~57,600 TFLOPS（估算） | 28,800 TFLOPS |
| FP64 DGEMM（總） | ~28,800 TFLOPS（估算） | 14,400 TFLOPS |
| 互連技術 | Infinity Fabric（896 GB/s 雙向每卡對卡） | NVLink 6（3.6 TB/s 每卡） |
| 總互連頻寬 | ~128 TB/s（估算） | 260 TB/s |
| 散熱方式 | 液冷散熱 | 液冷散熱 |
| 每美元推理 Token | 比競爭對手高 **30%** | — |

**機架級規格重點分析：**

- **記憶體容量大幅領先：** Helios 的 31.1 TB 總 HBM4 比 Vera Rubin NVL72 的 20.7 TB 多出約 **50%**。對於需要同時載入多個 Agent 模型的場景，這意味著更少的記憶體換頁與更高的並發能力。
- **FP4 推論性能差距縮小：** Vera Rubin NVL72 以 3.6 exaFLOPS 領先 AMD Helios 的 2.9 exaFLOPS，差距約 24%。相較於前代 Blackwell（B200）與 MI300X 之間超過 50% 的差距，AMD 已大幅縮小性能落差。
- **FP8 訓練優勢：** AMD Helios 提供 1.4 exaFLOPS FP8 訓練效能，而 NVIDIA 尚未公開 Vera Rubin 的 FP8 機架級數據，預期中兩者將處於相近水準。
- **FP32/FP64 科學運算：** 若以單卡 FP32 推算，Helios 在傳統 HPC 工作負載上可能具備優勢。

### AMD 的差異化策略

AMD 在本屆大會上強調了幾個關鍵差異化優勢：

1. **每美元推理 Token 產出高 30%：** 根據 AMD Performance Labs 計算，在同等部署成本下，Helios 可提供比 Vera Rubin NVL72 更高的推理 Token 產出。這主要得益於更大的記憶體容量帶來的更高並發能力，以及 2 nm 製程帶來的更好能效比。
2. **開放式 ROCm 生態系：** ROCm 提供 PyTorch、TensorFlow、JAX、vLLM、Triton 等主流框架的 Day-0 支援，避免 CUDA 鎖定（Vendor Lock-in）。
3. **與 OpenAI 的深度整合：** OpenAI 的 Triton 編譯框架已針對 MI455X 進行最佳化，為 Agentic AI 工作負載提供專屬加速。
4. **Microsoft Azure 合作部署：** Microsoft 宣布在 Azure 資料中心部署 AMD Helios 機架，為雲端用戶提供直接存取管道。

---

---

## AMD Helios™ AI 機架級解決方案

AMD 推出 **AMD Helios™ AI Rackscale Solution**，專為「AI 工廠」（AI Factory）等級的超大規模推理與訓練設計。

### Helios 機架規格詳情

| 規格項目 | 詳細數據 |
|---------|---------|
| GPU 數量 | **72 張 Instinct MI455X**（4-GPU 模組重複堆疊） |
| 總 HBM4 記憶體 | **31 TB** |
| 總記憶體頻寬 | **1.4 PB/s** |
| FP4 推理效能 | **2.9 exaFLOPS** |
| FP8 訓練效能 | **1.4 exaFLOPS** |
| 散熱方式 | 液冷散熱 |
| 網路卡 | AMD Pollara AI NIC |
| 每美元推理 Token | 比競爭對手高 **30%** |

Helios 整合了 MI455X 系列 GPU、第 6 代 EPYC CPU、AMD Pensando 資料處理單元（DPU）、高速互連技術與 AMD 自研系統軟體，提供從晶片到機櫃的端到端 AI 基礎設施。

Microsoft 已宣布將在 Azure 資料中心部署 AMD Helios 機架，進一步驗證其商業可行性。

---

## AMD Ryzen™ AI Embedded X100 系列：邊緣 AI 新世代

除了資料中心，AMD 也擴展了邊緣與嵌入式 AI 版圖，推出面向工業自動化、智慧影像與邊緣推理的全新產品線。

### Ryzen AI Embedded X100 規格詳情

| 規格項目 | 詳細數據 |
|---------|---------|
| CPU 架構 | AMD Zen 5（統一架構） |
| 最高核心數 | 16 核心 / 32 執行緒（支援 SMT） |
| NPU | XDNA 2 架構 |
| AI 運算效能 | 最高 **50 TOPS** |
| 整合繪圖 | AMD Radeon GPU（RDNA 3.5） |
| 記憶體架構 | 統一記憶體配置 |

### 產品型號

| 型號 | 適用場景 |
|-----|---------|
| Ryzen AI X199 | 商用邊緣裝置 |
| Ryzen AI X188 | 商用邊緣裝置 |
| Ryzen AI X168 | 商用邊緣裝置 |
| Ryzen AI P199 | 工業級（Industrial） |
| Ryzen AI P188 | 工業級（Industrial） |
| Ryzen AI P168 | 工業級（Industrial） |

---

## AMD Kria™ AI SOM 與機器人開發平台

AMD 同步發表面向物理 AI（Physical AI）與自主機器人的全新解決方案。

### Kria AI SOM 規格

| 規格項目 | 詳細數據 |
|---------|---------|
| 核心處理器 | AMD Kria AI SoM（搭載 X199 16 核心 CPU） |
| 記憶體選項 | 64 GB 或 128 GB LPDDR5X |
| 最大同時 Agent 數 | **234 個** |
| 每秒決策次數 | 最高 **8,000 次** |

### 機器人開發平台特色

- **異質運算整合：** 結合 CPU、GPU、NPU 與載板 FPGA，提供完整的邊緣 AI 運算能力。
- **AMD Robotics Software Suite：** 一整套機器人軟體框架，支援從開發到部署的完整生命週期。
- **首創開放式機架平台：** 首款開放、即插即用的自主機器人整合開發平台。

---

## 總結

Advancing AI 2026 展現了 AMD 在代理式 AI 時代的全棧戰略——

| 產品線 | 關鍵規格亮點 |
|-------|-------------|
| EPYC 9006 Venice | 最高 256 核心、PCIe Gen 6、1.6 TB/s 記憶體頻寬 |
| Instinct MI400 / MI455X | CDNA 5 / 2nm / 432 GB HBM4 / 40 PFLOPS FP4 |
| Helios 機架 | 72 GPU / 2.9 EFLOPS FP4 / Infinity Fabric / 31 TB HBM4 |
| Ryzen AI Embedded X100 | Zen 5 / 16 核心 / 50 TOPS NPU |
| Kria AI SOM | 234 同步 Agent / 8,000 決策/秒 |

從底層晶片（EPYC Venice、MI455X CDNA 5）、機櫃級系統（Helios）到邊緣運算（Ryzen AI Embedded、Kria），再加上 ROCm 生態系與 OpenAI、Microsoft 等關鍵合作夥伴的深化協作，AMD 正以完整的產品矩陣挑戰 AI 運算市場的格局。

對於企業而言，選擇具備彈性與開放性的 AI 基礎設施已成為關鍵決策，而 AMD 在本屆大會上所展示的解決方案，無疑為資料中心與邊緣端的 AI 部署提供了更具競爭力的選項。
