import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TabsComponent = ({ children }) => {
    return (
        <Tabs>
            <TabList>
                <Tab>Today</Tab>
                <Tab>Later</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    {children}
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TabsComponent 