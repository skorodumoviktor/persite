export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-row h-[50px] bg-green-200">
      <div className="container mx-auto px-4 flex flex-row flex items-center justify-between">
        <div className="flex flex-row">
          <div className="mr-3">Обо мне</div>
          <div className="mr-3">Опыт</div>
          <div className="mr-3">Skills</div>
          <div>Контакты</div>
        </div>

        <div className="flex flex-row">
          <div>PDF</div>
          <div className="ml-3">Dark Mode</div>
        </div>
      </div>
    </div>
  );
}
