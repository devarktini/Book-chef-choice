import { useRouter } from "next/navigation";

function FormNavigate({
  navigateTo,
  handleBtnClick,
  navigationDisabled,
  children,
  bgColor,
  hoverColor,
}) {
  const router = useRouter();

  function handleNavigationClick() {
    const canNavigate = handleBtnClick ? handleBtnClick() : true;
    if (canNavigate && navigateTo?.length > 0) {
      router.push(navigateTo);
    }
  }

  return (
    <button
      disabled={navigationDisabled}
      className={`${bgColor} ${
        navigationDisabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${hoverColor} w-40 rounded-md px-4 py-2 text-white`}
      onClick={handleNavigationClick}
    >
      {children}
    </button>
  );
}

export default FormNavigate;
