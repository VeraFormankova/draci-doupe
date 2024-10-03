import { FormattedMessage } from "react-intl";

export const Races = () => {
    return (
        <main>
            <header><h1>
                <FormattedMessage id="races_title" />
            </h1></header>
            <section><p>
                <FormattedMessage id="races_introduction" />
            </p></section>
            <section><h3>
                <FormattedMessage id="races_hobbit_name" />
            </h3></section>
            <section><p>
                <FormattedMessage id="races_hobbit_description" />
            </p></section>
        </main>
    );
}