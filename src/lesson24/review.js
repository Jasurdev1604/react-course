// React 18V

// Batching -> flushSync -> statelarni aloxida aloxida re-render qilib beradi

// useTransition -> [isPendinf , startTransition] , isPending true yoki false qaytarade map dan oldin loading... qos=yishda ishlatiladi , startTransition praioritini sekinlashtirib beradi

// startTransition -> useTramsition bilan bir xil faqt class componentda ishlatiladi

// useDifferedValue -> useTransition bilan bir xil vazifasi faqat prop kelgan paytda ishlatiladi

// suspense -> lazy -> fetchdan hamma malumotlar kelguncha fallback={<h1>loading...</h1>} yuradi kelib bolgach componentni yurgizadi
// suspenseList
// useId -> har doim unic id yasb beradi
// useDebugValue -> faqat costum hooklar bilan ishlaydi