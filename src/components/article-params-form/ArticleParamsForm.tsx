import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyClasses, fontFamilyOptions, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';


export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedFont, setSelectedFont] = useState<OptionType>(defaultArticleState.fontFamilyOption);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(defaultArticleState.fontSizeOption)
	const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(defaultArticleState.fontColor)
	const [selectedBackGroundColor, setSelectedBackGroundColor] = useState<OptionType>(defaultArticleState.backgroundColor)
	const [selectedContentWidth, setSelectedContentWidth] = useState<OptionType>(defaultArticleState.contentWidth)


	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<h2 className={styles.formTitle}>Задайте параметры</h2>
					<Select
						selected={selectedFont}
						options={fontFamilyOptions}
						title='Шрифт'
						onChange={setSelectedFont}
					/>
					<RadioGroup
						name='font-size'
						options={fontSizeOptions}
						selected={selectedFontSize}
						onChange={setSelectedFontSize}
						title='Размер Шрифта'
					/>
					<Select
						selected={selectedFontColor}
						options={fontColors}
						title='Цвет Шрифта'
						onChange={setSelectedFontColor}
					/>
					<Separator />
					<Select
						selected={selectedBackGroundColor}
						options={backgroundColors}
						title='Цвет Фона'
						onChange={setSelectedBackGroundColor}
					/>
					<Select
						selected={selectedContentWidth}
						options={contentWidthArr}
						title='Ширина Контента'
						onChange={setSelectedContentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
