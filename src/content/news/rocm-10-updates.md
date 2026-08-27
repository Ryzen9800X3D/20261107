---
title: "AMD ROCm 10.0 深度解析：從 7.14 到 10.0 的架構轉型與實務指南"
pubDate: 2026-08-27
tag: "產品新知"
description: "AMD ROCm 10.0.0 於 2026 年 8 月 26 日發布，標誌著 TheRock 構建系統全面接管後的第一個 major release。本文深度解析所有新功能、硬體支援、Breaking Changes、升級路徑與實務建議。"
image: "/images/rocm-10-updates/rocm-sdk-arch.png"
author: "沅品科技硬體研究團隊"
---

# AMD ROCm 10.0 深度解析：從 7.14 到 10.0 的架構轉型與實務指南

## 摘要

AMD ROCm 在 2026 年下半年經歷重大版本躍遷。從 7.14 的 TheRock 過渡，到 8 月 26 日釋出的 **ROCm 10.0.0**，標誌著 AMD AI 軟體平台進入模組化、高頻率更新的新时代。本文深度解析 10.0 的所有新功能、硬體支援、Breaking Changes、升級路徑與實務建議。

---

## 1. ROCm 7.14.0（2026 年 7 月 15 日）— TheRock 過渡版

### 核心變更
- **TheRock 構建系統正式導入**：從 monolithic 轉向模組化架構
- **Core SDK 瘦身**：聚焦 essential runtime 與開發組件
- **硬體支援擴展**：新增更多 GPU 與作業系統支援
- **AI 框架強化**：PyTorch、TensorFlow 更新
- **ROCprofiler-SDK**：AI profiling 工具升級

### 定位
7.14 是「最後一代舊架構」與「新 TheRock 平台」的過渡版本，官方建議 7.2 以下用戶遷移至此。

![ROCm 7.14 TheRock 構建系統](/images/rocm-10-updates/rocm-ontology.png)

*圖 1：ROCm 7.14 導入 TheRock 構建系統，標誌著模組化架構的開始*

---

## 2. ROCm 10.0.0（2026 年 8 月 26 日）— 重大版本躍遷

### 版本跳號意義
- 從 7.x 直接跳到 **10.0**，代表 TheRock 構建系統全面接管後的**第一個正式 major release**
- AMD 宣布改為 **每六週** 發布新功能的節奏（不再季度發布）

![ROCm 軟體堆疊架構](/images/rocm-10-updates/rocm-sdk-arch.png)

*圖 2：ROCm 10.0 的完整軟體堆疊，涵蓋從硬體到應用層的完整支援*

### 硬體支援擴展

#### 新增消費級 GPU 支援
- **AMD Radeon RX 9050 (gfx1200)**
- **AMD Radeon RX 9050 (4GB) (gfx1200)**

#### Instinct 虛擬化擴展
- **MI355X / MI350X**：Ubuntu 22.04 host → Ubuntu 22.04 guest（Passthrough）
- **MI350P**：ESXi 9.1 → Ubuntu 24.04 guest（Passthrough）

#### GPU 分割（Partitioning）
- 維持 7.14 的分割支援，強化 MxGPU 多租户能力

### 技術亮點

#### AI 推論框架支援
- PyTorch 2.13.0
- JAX 0.11.0 / 0.10.2
- vLLM 0.27.0

#### HIP 功能增強
- **hipEventRecord 效能提升**：使用 `hipEventDisableTiming` 避免不必要的 profiling
- **cooperative_groups 掃描支援**：新增 `inclusive_scan` 和 `exclusive_scan` API
- **ROCr Runtime core dump 支援**：attached debuggers 可產生 core dump

#### ROCprofiler-SDK 功能
- **rocSHMEM API tracing**：支援 `rocshmem_putmem_on_stream`、`rocshmem_getmem_on_stream`、`rocshmem_alltoallmem_on_stream`
- **hipFile tracing**：檔案 I/O 操作可納入 profiling 時間軸
- **OpenMP (OMPT) tracing**：`--ompt-trace` 旗標支援
- **HIP Graph per-node attribution**：每個圖節點的時間與計數器聚合
- **SPM ROCpd output 支援**：Streaming Performance Monitor 計數器資料

#### 通訊庫更新
- **Composable Kernel**：a8w8 GEMM 效能提升
- **rocFFT**：多 GPU RCCL backend 支援
- **RCCL**：對稱記憶體支援更新
- **hipSPARSE / rocSPARSE**：
  - Blocked ELL 格式支援
  - CSC 格式稀疏三角求解
  - SpMV nnz-split 算法
  - SpMM 算法選擇優化

### Breaking Changes（不相容變更）

#### AMD SMI API/ABI 破壞性變更
- **Library SONAME 變更**：`libamd_smi.so.26` → `libamd_smi.so.27`
- **amdsmi_gpu_metrics_t 欄位類型擴展**：`uint32_t` → `uint64_t`
  - `gfx_activity_acc`
  - `mem_activity_acc`
  - `pcie_nak_sent_count_acc`
  - `pcie_nak_rcvd_count_acc`
  - `pcie_lc_perf_other_end_recovery`
- **已移除 APIs**：需重新編譯
- **已移除 Python 輸出欄位**：API 簽章變更
- **已棄用 APIs**：ROCm 10.0 仍支援，未來版本將移除

#### 已知問題
- HuggingFace 模型訓練吞吐量可能在 MI350X 下降
- JAX BERT FP16 訓練可能在某些 Radeon GPU 上遇到 segmentation fault
- PyTorch 訓練和微調工作負載可能在某些 Radeon GPU 上遇到 GPU reset 或 crash
- SGLang 推論可能在某些 Radeon GPU 上失敗（預設 AITER attention backend）
- TensorFlow ROCm v2.21 可能在某些 Radeon GPU 上無法啟動（libhipsparse ImportError）
- vLLM 或 ComfyUI 工作負載可能在某些 Ryzen AI 系統上 crash

---

## 3. 升級路徑與實務建議

### 是否支援原地升級？
**不支援**。官方明確指出：
> "No upgrade path from existing production releases."

從 7.x 跳到 10.0 是大版本跨越，需**先完整移除 7.14，再乾淨安裝 10.0**。

### 完整移除流程
```bash
# 1. 官方移除主要套件
sudo amdgpu-uninstall

# 2. 移除安裝程式與 repository
sudo apt purge amdgpu-install
sudo apt autoremove

# 3. 手動清理殘留（已知問題）
sudo apt-get purge rocm-bandwidth-test

# 4. 重開機
sudo reboot
```

### 驗證乾淨移除
```bash
dpkg -l | grep rocm
dnf list installed | grep rocm
```

### 安裝 10.0 注意事項
- 使用 TheRock 架構下的新 repo 路徑
- 參考 [ROCm 10.0 安裝指南](https://rocm.docs.amd.com/en/latest/install/rocm.html)
- llama.cpp 可能需要重新編譯（HIP 版本不同）

---

## 4. 未來路線圖

- **六週發布週期**：新功能快速迭代
- **SPIR-V IR 推廣**：跨架構中間表示層
- **模組化生態**：component-level integration、nightly/weekly builds
- **Windows 支援擴展**：ComfyUI Desktop 已支援 ROCm 7.1.1

---

## 5. 對實務應用的影響

### 對 LLM 推論（llama.cpp）
- GPU 分割功能對多載環境有幫助
- 需注意 HIP 版本變更可能影響編譯
- 建議保留 models.ini 備份

### 對開發者
- 新 repo 結構與安裝方式
- API/ABI 破壞性變更需要适配
- 六週更新節奏帶來更快的功能迭代

---

## 6. 硬體支援清單

### AMD Instinct 系列
| 系列 | 裝置 | LLVM target | 架構 |
|------|------|-------------|------|
| MI350 | MI355X, MI350X, MI350P | gfx942 | CDNA4 |
| MI300 | MI300X, MI300A | gfx942 | CDNA3 |
| MI200 | MI250X, MI250, MI210 | gfx90a | CDNA2 |

### Radeon 消費級
| 系列 | 裝置 | LLVM target | 架構 |
|------|------|-------------|------|
| RX 9000 | RX 9050 | gfx1200 | RDNA4 |
| RX 7000 | RX 7900 XTX, RX 7900 XT | gfx942 | RDNA3 |

---

## 參考連結

- [ROCm 10.0 發布說明](https://rocm.docs.amd.com/en/latest/about/release-notes.html)
- [Transition Guide](https://rocm.docs.amd.com/en/latest/transition-guide.html)
- [TheRock 構建系統](https://github.com/ROCm/TheRock)
- [ROCm GitHub Releases](https://github.com/ROCm/ROCm/releases)

---

*本文基於 AMD 官方文件與社群資訊整理，規格與功能以官方最新公告為準。*
