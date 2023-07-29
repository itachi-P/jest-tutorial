// Jest単体ではReactコンポーネントを描画できないので、React Testing Libraryを使用
import { render, screen } from "@testing-library/react";
// ボタンのクリックなどユーザーの操作をシミュレートするために必要
import userEvent from "@testing-library/user-event";
// テスト対象のコンポーネント
import { SimpleButton } from "./SimpleButton";

// ユーザーの操作をシミュレートするテスト
test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
	const user = userEvent.setup();
	render(<SimpleButton />);
	// 初期状態ではOFFと表示されていることの確認
	const simpleButton = screen.getByRole("button");
	expect(simpleButton).toHaveTextContent("OFF");
	// ボタンのラベルがOFFの状態でクリックされたらONになる
	await user.click(simpleButton);
	expect(simpleButton).toHaveTextContent("ON");
});

// スナップショットテスト - 描画直後の状態をテストする
test("描画されてすぐはOFFと表示されている", () => {
	const view = render(<SimpleButton />);
	expect(view.container).toMatchSnapshot();
});