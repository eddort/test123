import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Components.Adasd background="#296db1">
				<Override slot="text2">
					asdas
				</Override>
				<Override slot="text">
					sadasd
				</Override>
				<Override slot="text1">
					asdasdad
				</Override>
			</Components.Adasd>
			<Components.Adasd>
				<Override slot="text2">
					asdas
				</Override>
				<Override slot="text">
					sadasd
				</Override>
			</Components.Adasd>
		</Section>
	</Theme>;
});